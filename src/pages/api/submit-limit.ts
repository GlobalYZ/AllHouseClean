import { NextApiRequest, NextApiResponse } from 'next';

interface SubmissionRecord {
  count: number;
  timestamp: number;
}

// In-memory storage for submission records
const submissionRecords = new Map<string, SubmissionRecord>();

const SUBMISSION_LIMIT = 4;
const TIME_WINDOW = 10 * 60; // 10 minutes in seconds

// Clean up old records periodically
setInterval(() => {
  const now = Math.floor(Date.now() / 1000);
  Array.from(submissionRecords.entries()).forEach(([key, record]) => {
    if (now - record.timestamp > TIME_WINDOW) {
      submissionRecords.delete(key);
    }
  });
}, 60000); // Clean up every minute

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  try {
    // Get client IP
    const forwardedFor = req.headers['x-forwarded-for'];
    const ip = Array.isArray(forwardedFor) 
    ? forwardedFor[0] 
    : forwardedFor?.split(',')[0] || req.socket.remoteAddress || 'unknown';
    
    console.log('Processing request for IP:', ip);
    
    const now = Math.floor(Date.now() / 1000);
    const record = submissionRecords.get(ip);
    
    if (record) {
      // Check if time window has passed
      if (now - record.timestamp <= TIME_WINDOW) {
        if (record.count >= SUBMISSION_LIMIT) {
          const remainingTime = Math.ceil((TIME_WINDOW - (now - record.timestamp)) / 60);
          return res.status(429).json({
            message: `Rate limit exceeded`,
            remainingTime,
          });
        }
        
        // Increment count
        record.count += 1;
        submissionRecords.set(ip, record);
        
        return res.status(200).json({
          remainingSubmissions: SUBMISSION_LIMIT - record.count,
        });
      }
    }
    
    // First submission or time window passed
    submissionRecords.set(ip, {
      count: 1,
      timestamp: now,
    });
    
    return res.status(200).json({
      remainingSubmissions: SUBMISSION_LIMIT - 1,
    });
    
  } catch (error) {
    console.error('Rate limit check error:', error);
    return res.status(500).json({ 
      message: 'Internal server error',
      error: error instanceof Error ? error.message : String(error)
    });
  }
} 