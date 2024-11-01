import React from 'react';
import { BookOpen, Pen, Users, Target, Layout, Search, Code, MessageSquare, Brain, Check } from 'lucide-react';

export default function TechWritingGuide() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* 外框容器 */}
      <div className="border-2 border-gray-200 bg-white rounded-lg">
        {/* 標題區 - 上方留白稍微縮小 */}
        <div className="text-center pt-6 pb-4 border-b border-gray-100">
          <div className="flex justify-center mb-2">
            <Pen className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold mb-2">技術寫作懶人包</h1>
          <p className="text-gray-500 text-sm">打造清晰易懂的技術文件</p>
        </div>

        {/* 核心內容區 - 調整邊距使內容更緊湊 */}
        <div className="p-6 space-y-6">
          {/* 第一層：前期準備 */}
          <div className="border rounded-lg p-5 bg-gray-50 hover:bg-blue-50 transition-colors">
            <h2 className="text-lg font-bold mb-4 flex items-center text-blue-700">
              <Target className="w-5 h-5 mr-2" />
              寫作前準備
            </h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex items-start">
                <Users className="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">定義讀者</h3>
                  <p className="text-sm text-gray-600">確定目標受眾與技術水平</p>
                </div>
              </div>
              <div className="flex items-start">
                <Layout className="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">架構規劃</h3>
                  <p className="text-sm text-gray-600">列出主要章節與重點</p>
                </div>
              </div>
              <div className="flex items-start">
                <Search className="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">資料收集</h3>
                  <p className="text-sm text-gray-600">蒐集相關文件與範例</p>
                </div>
              </div>
            </div>
          </div>

          {/* 第二層：內容準則 */}
          <div className="border rounded-lg p-5 bg-gray-50 hover:bg-blue-50 transition-colors">
            <h2 className="text-lg font-bold mb-4 flex items-center text-blue-700">
              <BookOpen className="w-5 h-5 mr-2" />
              內容準則
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <Code className="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">代碼展示</h3>
                  <p className="text-sm text-gray-600">- 提供完整可執行範例</p>
                  <p className="text-sm text-gray-600">- 加入適當註解說明</p>
                </div>
              </div>
              <div className="flex items-start">
                <Brain className="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">概念解釋</h3>
                  <p className="text-sm text-gray-600">- 由淺入深漸進說明</p>
                  <p className="text-sm text-gray-600">- 使用類比與圖解</p>
                </div>
              </div>
            </div>
          </div>

          {/* 第三層：檢查重點 */}
          <div className="border rounded-lg p-5 bg-gray-50 hover:bg-blue-50 transition-colors">
            <h2 className="text-lg font-bold mb-4 flex items-center text-blue-700">
              <Check className="w-5 h-5 mr-2" />
              發布前檢查
            </h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex items-start">
                <MessageSquare className="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">語言校對</h3>
                  <p className="text-sm text-gray-600">檢查文字通順與專業術語</p>
                </div>
              </div>
              <div className="flex items-start">
                <Code className="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">程式碼測試</h3>
                  <p className="text-sm text-gray-600">確認所有範例都能執行</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-5 h-5 mr-2 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">同儕審查</h3>
                  <p className="text-sm text-gray-600">請他人提供改進建議</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部標語 - 加上上邊框 */}
        <div className="text-center py-4 border-t border-gray-100 text-gray-600 text-sm">
          掌握要點，寫出好文章
        </div>
      </div>
    </div>
  );
}
