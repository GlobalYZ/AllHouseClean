# builder stage
FROM node:20-alpine AS builder

# set working directory
WORKDIR /app

# copy package.json and package-lock.json (if exists)
COPY package*.json ./

# install dependencies
RUN npm ci

# copy source code
COPY . .

# build application
RUN npm run build

# runner stage
FROM node:20-alpine AS runner

WORKDIR /app

# set to production environment
ENV NODE_ENV production

# add a non root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# copy necessary files from builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# set correct permissions
RUN chown -R nextjs:nodejs /app

# switch to non root user
USER nextjs

# expose port
EXPOSE 3000

# set environment variables
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# start application
CMD ["next", "start"] 