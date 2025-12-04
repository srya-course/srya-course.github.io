# 筆記管理

此資料夾用於管理您的筆記內容。

## 使用方法

1. **新增筆記**：複製 `example.yaml` 並重新命名，例如 `2024-12-04-react-notes.yaml`
2. **編輯內容**：修改 YAML 檔案中的字段
3. **保存**：直接保存檔案，系統會自動讀取

## YAML 檔案結構

每個筆記 YAML 檔案應包含以下欄位：

| 欄位 | 類型 | 說明 | 必需 |
|------|------|------|------|
| `id` | string | 唯一識別碼 | ✓ |
| `title` | string | 筆記標題 | ✓ |
| `category` | string | 分類（例如：技術、生活、讀書等） | ✓ |
| `tags` | array | 標籤列表 | ✓ |
| `date` | string | 建立日期（格式：YYYY-MM-DD） | ✓ |
| `preview` | string | 預覽文本/摘要 | ✓ |
| `content` | string | 完整筆記內容（支援 Markdown） | ✓ |

## 範例

```yaml
id: note-2024-12-04-001
title: "React Hooks 學習筆記"
category: "技術"
tags:
  - React
  - JavaScript
date: "2024-12-04"
preview: "useState 和 useEffect 是最常用的兩個 Hook..."
content: |
  # React Hooks 學習筆記
  ...
```
