// 轮播图片配置文件
// 要添加新图片，只需：
// 1. 将图片文件放入 src/assets/images/DetailImages1/ 目录
// 2. 在下面添加对应的导入语句
// 3. 在 imageMap 中添加新的条目

import DetailImage1 from "@/assets/images/DetailImages1/1.jpeg";
import DetailImage2 from "@/assets/images/DetailImages1/2.jpeg";
import DetailImage3 from "@/assets/images/DetailImages1/3.jpeg";

// 图片映射对象 - 可以轻松添加或移除图片
export const imageMap = {
  1: DetailImage1,
  2: DetailImage2,
  3: DetailImage3,
  4: DetailImage1,
  5: DetailImage2,
  6: DetailImage3,
  7: DetailImage1,
  8: DetailImage2,
  9: DetailImage3,
};

// 创建轮播图片数组
export const createCarouselImages = () => {
  return Object.entries(imageMap).map(([key, image]) => ({
    src: image.src,
    alt: `Detail Image ${key}`,
    id: key,
  }));
};

// 获取图片总数
export const getTotalImages = () => Object.keys(imageMap).length;

// 验证图片索引是否有效
export const isValidImageIndex = (index: number) => {
  return index >= 0 && index < getTotalImages();
}; 