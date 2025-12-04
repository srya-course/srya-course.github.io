# 影片管理

此資料夾用於管理您的影片內容。

## 使用方法

1. **編輯 `videos.yaml`**：在此檔案中統一管理所有影片
2. **添加影片**：在 `videos` 陣列中添加新的影片條目
3. **保存**：直接保存檔案，系統會自動讀取

## 檔案結構

`videos.yaml` 包含一個 `videos` 陣列，每個影片物件應包含以下欄位：

| 欄位 | 類型 | 說明 | 必需 |
|------|------|------|------|
| `id` | string | 唯一識別碼 | ✓ |
| `title` | string | 影片標題 | ✓ |
| `description` | string | 影片描述 | ✓ |
| `embedUrl` | string | 嵌入 URL（YouTube、Vimeo 等） | ✓ |
| `thumbnailUrl` | string | 縮圖 URL（相對或絕對路徑） | - |
| `duration` | string | 影片時長（格式：MM:SS） | - |
| `category` | string | 分類（可選） | - |
| `createdAt` | string | 建立日期（格式：YYYY-MM-DD） | ✓ |

## 範例

```yaml
videos:
  - id: "video-2024-12-04-001"
    title: "React 教程"
    description: "學習 React 基礎"
    embedUrl: "https://www.youtube.com/embed/xxx"
    thumbnailUrl: "/videos/thumbnails/react.jpg"
    duration: "5:30"
    category: "教程"
    createdAt: "2024-12-04"
```

## 支援的影片來源

- YouTube：使用嵌入 URL（`https://www.youtube.com/embed/VIDEO_ID`）
- Vimeo：使用嵌入 URL（`https://player.vimeo.com/video/VIDEO_ID`）
- 本地視頻：使用 HTML5 video 標籤支援的格式

## 縮圖存儲位置

建議在此資料夾下新增 `thumbnails` 子資料夾來存儲縮圖檔案，例如：
```
videos/
  ├── videos.yaml
  ├── thumbnails/
  │   ├── react.jpg
  │   ├── tutorial.jpg
  │   └── ...
  └── README.md
```
