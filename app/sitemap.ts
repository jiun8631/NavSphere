import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://booo.dpdns.org/';  // 替換成你的網站域名

  return [
    {
      url: `${baseUrl}/`,  // 首頁
      lastModified: new Date(),  // 最後修改時間（自動用當前日期）
      changeFrequency: 'weekly',  // 變化頻率：yearly/monthly/weekly 等
      priority: 1,  // 優先級：0-1，首頁最高
    },
    
    /* 先停用這兩個頁面
    {
      url: `${baseUrl}/about`,  // 關於頁面（如果有）
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/navigation`,  // 你的導航頁面（根據項目調整）
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    */
    
    // 如果有更多頁面，從數據庫或 GitHub 讀取動態添加
  ];
}