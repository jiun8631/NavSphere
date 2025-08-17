import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',  // 適用所有搜尋引擎爬蟲
      allow: '/',      // 允許爬取整個網站
      // disallow: '/private/',  // 如果有不想被爬的頁面，可以加這行（例如禁止 /private/）
    },
    sitemap: 'https://booo.dpdns.org/sitemap.xml',  // 替換成你的網站域名
  };
}