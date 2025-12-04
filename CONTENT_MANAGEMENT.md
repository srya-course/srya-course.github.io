# 內容管理系統設置完成

親愛的 SubaRya，您的 YAML 型內容管理系統已經建立完成！

## 📁 系統結構

```
content/
├── diary/              # 日記管理
│   ├── example.yaml    # 日記範本（參考用）
│   ├── README.md       # 詳細說明
│   └── [您的日記].yaml # 您的日記檔案
│
├── notes/              # 筆記管理
│   ├── example.yaml    # 筆記範本（參考用）
│   ├── README.md       # 詳細說明
│   └── [您的筆記].yaml # 您的筆記檔案
│
├── gallery/            # 圖片管理
│   ├── gallery.yaml    # 圖片統一管理檔案
│   ├── images/         # 圖片存儲資料夾
│   ├── README.md       # 詳細說明
│   └── .gitkeep
│
├── videos/             # 影片管理
│   ├── videos.yaml     # 影片統一管理檔案
│   ├── thumbnails/     # 縮圖存儲資料夾
│   ├── README.md       # 詳細說明
│   └── .gitkeep
│
└── README.md           # 本文檔（完整指南）
```

## 🚀 快速開始

### 新增日記
1. 進入 `content/diary/` 資料夾
2. 複製 `example.yaml` 為 `2024-12-04-today.yaml`（使用您自己的日期和名稱）
3. 編輯檔案，填寫日記內容
4. 保存 → 網站會自動顯示

**範例**：
```yaml
id: diary-2024-12-04
title: "今天的見聞"
date: "2024-12-04"
preview: "這是一個美好的日子..."
mood: "開心"
content: |
  完整的日記內容寫在這裡...
```

### 新增筆記
1. 進入 `content/notes/` 資料夾
2. 複製 `example.yaml` 為 `2024-12-04-react.yaml`
3. 編輯檔案，填寫筆記內容
4. 保存 → 網站會自動顯示

**範例**：
```yaml
id: note-2024-12-04-001
title: "React Hooks 筆記"
category: "技術"
tags:
  - React
  - JavaScript
date: "2024-12-04"
preview: "今天學習了 useEffect..."
content: |
  詳細筆記內容...
```

### 新增圖片
1. 進入 `content/gallery/` 資料夾
2. 將圖片檔案放在 `images/` 子資料夾
3. 編輯 `gallery.yaml`，添加圖片信息：

**範例**：
```yaml
images:
  - id: "gallery-2024-12-04-001"
    title: "美麗的風景"
    description: "在公園拍的照片"
    url: "/path/to/image.jpg"
    category: "風景"
    createdAt: "2024-12-04"
```

### 新增影片
1. 進入 `content/videos/` 資料夾
2. 編輯 `videos.yaml`，添加影片信息：

**範例**：
```yaml
videos:
  - id: "video-2024-12-04-001"
    title: "React 教程"
    description: "學習 React 基礎概念"
    embedUrl: "https://www.youtube.com/embed/xxx"
    duration: "10:30"
    category: "教程"
    createdAt: "2024-12-04"
```

## 📝 YAML 語法基礎

### 基本規則
- 冒號後面必須有空格：`key: value` ✓
- 使用空格進行縮進，不要用 Tab
- 字符串可以不加引號，但特殊字符需要加引號

### 常用類型
```yaml
文字: "這是文字"
數字: 42
布爾: true
日期: "2024-12-04"
列表:
  - 項目1
  - 項目2
多行文本: |
  第一行
  第二行
  第三行
```

## ✨ 特色

✅ **無需網站操作** - 通過編輯文件添加內容
✅ **版本控制友善** - YAML 檔案可以通過 Git 追蹤變更
✅ **易於備份** - 所有內容都是文本檔案
✅ **靈活管理** - 日記和筆記單獨文件，圖片和影片統一管理
✅ **自動解析** - 伺服器自動讀取並在網站上顯示

## 🔒 重要提示

### ⚠️ 必須做的事
- 使用 UTF-8 編碼編輯檔案
- 確保 `id` 的唯一性
- 遵循 YAML 格式規則
- 在網站上修改的內容不會被保存（請使用本資料夾管理）

### 🚫 不要做的事
- 在網站上點擊"新增"按鈕（已移除此功能）
- 修改 `example.yaml`（它是範本）
- 混合使用空格和制表符進行縮進
- 刪除 `README.md` 檔案

## 🛠️ 技術細節

### 伺服器實現
- 使用 Node.js + Express 伺服器
- YAML 解析库：`yaml`
- 啟動時自動從 `content/` 資料夾加載所有內容
- API 端點：`/api/diary-entries`, `/api/notes`, `/api/gallery-images`, `/api/videos`

### 文件位置
- 日記：`content/diary/*.yaml`（每個日記一個文件）
- 筆記：`content/notes/*.yaml`（每個筆記一個文件）
- 圖片：`content/gallery/gallery.yaml`（統一檔案）
- 影片：`content/videos/videos.yaml`（統一檔案）

## 📚 更多資訊

每個資料夾都有詳細的 README 檔案：

- [日記管理詳解](./diary/README.md)
- [筆記管理詳解](./notes/README.md)
- [圖片管理詳解](./gallery/README.md)
- [影片管理詳解](./videos/README.md)

## 🎉 開始使用

1. 打開編輯器
2. 進入 `content/diary/` 或 `content/notes/`
3. 複製 `example.yaml`
4. 修改內容
5. 保存
6. 刷新網站查看效果

祝您使用愉快！

---

**系統建立時間**：2024-12-04
**版本**：1.0
