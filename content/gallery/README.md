# 圖片管理

此資料夾用於管理您的圖片內容。

## 使用方法

1. **編輯 `gallery.yaml`**：在此檔案中統一管理所有圖片
2. **添加圖片**：在 `images` 陣列中添加新的圖片條目
3. **保存**：直接保存檔案，系統會自動讀取

## 檔案結構

`gallery.yaml` 包含一個 `images` 陣列，每個圖片物件應包含以下欄位：

| 欄位 | 類型 | 說明 | 必需 |
|------|------|------|------|
| `id` | string | 唯一識別碼 | ✓ |
| `title` | string | 圖片標題 | ✓ |
| `description` | string | 圖片描述 | ✓ |
| `url` | string | 圖片 URL（相對或絕對路徑） | ✓ |
| `category` | string | 分類（可選） | - |
| `createdAt` | string | 建立日期（格式：YYYY-MM-DD） | ✓ |

## 範例

```yaml
images:
  - id: "gallery-2024-12-04-001"
    title: "美麗的風景"
    description: "山上的日落景色"
    url: "/images/sunset.jpg"
    category: "風景"
    createdAt: "2024-12-04"
```

## 圖片存儲位置

建議在此資料夾下新增 `images` 子資料夾來存儲圖片檔案，例如：
```
gallery/
  ├── gallery.yaml
  ├── images/
  │   ├── sunset.jpg
  │   ├── portrait.jpg
  │   └── ...
  └── README.md
```
