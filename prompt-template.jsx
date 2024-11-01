import React from 'react';
import config from '@/config/writing-guide-config.json';

// Emoji 映射表
const EmojiMap = {
  BookOpen: '📖',
  Pen: '✏️',
  Users: '👥',
  Target: '🎯',
  Layout: '📑',
  Search: '🔍',
  Code: '💻',
  MessageSquare: '💬',
  Brain: '🧠',
  Check: '✅'
};

//懶人包的圖像使用 Emoji 製作


export default function DemoPage() {
  const headerEmoji = EmojiMap[config.headerIcon as keyof typeof EmojiMap];

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="border-2 border-gray-200 bg-white rounded-lg">
          <div className="text-center pt-6 pb-4 border-b border-gray-100">
            <div className="flex justify-center mb-2">
              <span className="text-2xl">{headerEmoji}</span>
            </div>
            <h1 className="text-2xl font-bold mb-2">{config.title}</h1>
            <p className="text-gray-500 text-sm">{config.subtitle}</p>
          </div>

          <div className="p-6 space-y-6">
            {config.sections.map((section, index) => {
              const sectionEmoji = EmojiMap[section.icon as keyof typeof EmojiMap];
              return (
                <div key={index} className={`border rounded-lg p-5 bg-${config.theme.bgDefault} hover:bg-${config.theme.bgHover} transition-colors`}>
                  <h2 className={`text-lg font-bold mb-4 flex items-center text-${config.theme.primaryTextColor}`}>
                    <span className="mr-2">{sectionEmoji}</span>
                    {section.title}
                  </h2>
                  <div className={`grid grid-cols-${section.items.length} gap-6`}>
                    {section.items.map((item, itemIndex) => {
                      const itemEmoji = EmojiMap[item.icon as keyof typeof EmojiMap];
                      return (
                        <div key={itemIndex} className="flex items-start">
                          <span className="mr-2 flex-shrink-0">{itemEmoji}</span>
                          <div>
                            <h3 className="font-medium mb-1">{item.title}</h3>
                            {Array.isArray(item.description) ? (
                              item.description.map((desc, descIndex) => (
                                <p key={descIndex} className="text-sm text-gray-600">- {desc}</p>
                              ))
                            ) : (
                              <p className="text-sm text-gray-600">{item.description}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center py-4 border-t border-gray-100 text-gray-600 text-sm">
            {config.footer}
          </div>
        </div>
      </div>
    </div>
  );
}
