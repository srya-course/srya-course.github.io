# 日記管理

此資料夾用於管理您的日記內容。

## 使用方法

1. **新增日記**：複製 `example.yaml` 並重新命名，例如 `2024-12-04-my-diary.yaml`
2. **編輯內容**：修改 YAML 檔案中的字段
3. **保存**：直接保存檔案，系統會自動讀取

## YAML 檔案結構

每個日記 YAML 檔案應包含以下欄位：

| 欄位 | 類型 | 說明 | 必需 |
|------|------|------|------|
| `id` | string | 唯一識別碼（建議格式：diary-YYYY-MM-DD） | ✓ |
| `title` | string | 日記標題 | ✓ |
| `date` | string | 日期（格式：YYYY-MM-DD） | ✓ |
| `preview` | string | 預覽文本/摘要 | ✓ |
| `mood` | string | 心情表情（可選） | - |
| `content` | string | 完整的日記內容 | ✓ |

## 範例

```yaml
id: diary-2024-12-04
title: "今天天氣真好"
date: "2024-12-04"
preview: "今天是個晴朗的日子..."
mood: "開心"
content: |
  今天是個晴朗的日子，我在公園裡散步。
```
