// ============================================
// AI Prompt Showcase - Content Data
// B站风格 · 大量案例数据
// ============================================

var SITE_CONFIG = {
    name: "梧桐树 ai",
    slogan: "拆解爆火案例 · 解锁 AI 提示词",
    socialLinks: {
        bilibili: "https://space.bilibili.com/",
        douyin: "https://www.douyin.com/",
        xiaohongshu: "https://www.xiaohongshu.com/"
    }
};

// Placeholder images from picsum.photos
function getPlaceholder(id, w, h) {
    return "https://picsum.photos/seed/" + id + "/" + w + "/" + h;
}

var CONTENT_DATA = [
    // ===== 栏目一：Vlog 展示 =====
    {
        id: "vlog-001",
        category: "vlog",
        title: "用 AI 记录我的一天 — 当 Vlog 遇见 Sora",
        cover: getPlaceholder("vlog1", 640, 360),
        date: "2026-02-14",
        author: "站长",
        views: 12580,
        copies: 3420,
        duration: "05:32",
        tags: ["Vlog", "Sora", "日常"],
        opening: {
            summary: "尝试用 AI 生成的画面来制作一支日常 Vlog。从清晨的阳光到深夜的代码，看看 AI 能把普通生活拍出什么感觉。",
            preview: ""
        },
        main: {
            steps: [
                { title: "场景一：清晨起床", description: "用 Sora 生成一段柔和的晨光场景。", prompt: "Cinematic shot of soft morning sunlight streaming through white curtains into a cozy bedroom, warm golden light, dust particles floating in the air, gentle camera dolly forward, 4K, film grain, aspect ratio 16:9", params: { model: "Sora 2", duration: "15s" } },
                { title: "场景二：咖啡与灵感", description: "展示自由职业者的工作台。", prompt: "Top-down shot of a minimalist desk with a MacBook, steaming cup of coffee, scattered handwritten notes, warm ambient lighting, slight camera rotation, cozy creative workspace vibes, 4K cinematic", params: { model: "Sora 2", duration: "10s" } },
                { title: "场景三：夜晚编程", description: "深夜安静的房间，屏幕映照在脸上。", prompt: "Close-up of a person's hands typing on a mechanical keyboard in a dark room, monitor light reflecting on their face, code scrolling on screen, lo-fi atmosphere, shallow depth of field, 4K", params: { model: "Sora 2", duration: "12s" } }
            ]
        },
        closing: { summary: "AI 不是要取代真实生活的镜头，而是帮我们用另一种视角去记录和表达。", socialLinks: { bilibili: "#", douyin: "#" }, relatedIds: ["vlog-002"] }
    },
    {
        id: "vlog-002",
        category: "vlog",
        title: "迷失方向的时候，我用 AI 拍了这支 Vlog",
        cover: getPlaceholder("vlog2", 640, 360),
        date: "2026-02-12",
        author: "站长",
        views: 8930,
        copies: 2150,
        duration: "04:18",
        tags: ["Vlog", "情绪", "AI视频"],
        opening: { summary: "有些时候不是内向、也不是无聊，只是迷茫。但迷茫本身，就是迈出第一步的催化剂。", preview: "" },
        main: {
            steps: [
                { title: "开篇：空旷的城市", description: "用无人的城市街道表达迷茫感。", prompt: "Wide angle shot of empty city streets at dawn, fog rolling between buildings, one person walking alone in the distance, melancholic mood, muted desaturated colors, slow dolly forward, cinematic 4K", params: { model: "Sora 2", duration: "15s" } }
            ]
        },
        closing: { summary: "迷茫不可怕，可怕的是停在原地。", socialLinks: { bilibili: "#" }, relatedIds: ["vlog-001"] }
    },
    {
        id: "vlog-003",
        category: "vlog",
        title: "AI 春节 Vlog：05后的年味记忆",
        cover: getPlaceholder("spring", 640, 360),
        date: "2026-02-10",
        author: "站长",
        views: 15200,
        copies: 4300,
        duration: "06:45",
        tags: ["Vlog", "春节", "05后"],
        opening: { summary: "用 AI 重新定义年味。鞭炮声渐远，但家的温暖从未改变。", preview: "" },
        main: {
            steps: [
                { title: "童年的烟花", description: "回忆小时候放烟花的画面。", prompt: "VHS-style footage of children playing with sparklers during Chinese New Year, warm nostalgic color grading, vintage film effect, lanterns and red decorations, 4K with retro overlay", params: { model: "Sora 2", duration: "12s" } }
            ]
        },
        closing: { summary: "长大后才发现，年味不在鞭炮里，在你愿不愿意回家的心里。", socialLinks: { bilibili: "#", douyin: "#" }, relatedIds: ["vlog-001", "vlog-002"] }
    },
    {
        id: "vlog-004",
        category: "vlog",
        title: "一个人的城市漫步 · AI 电影感 Vlog",
        cover: getPlaceholder("city", 640, 360),
        date: "2026-02-08",
        author: "站长",
        views: 6700,
        copies: 1890,
        duration: "03:55",
        tags: ["Vlog", "城市", "电影感"],
        opening: { summary: "城市的角落都藏着故事，用 AI 给每一帧加上电影质感。", preview: "" },
        main: {
            steps: [
                { title: "街头行走", description: "跟拍视角的城市漫步。", prompt: "Steadicam following shot of a person walking through a bustling Asian city at golden hour, neon signs reflecting on wet pavement, shallow depth of field, Wong Kar-wai cinematography style, 4K", params: { model: "Sora 2", duration: "15s" } }
            ]
        },
        closing: { summary: "每座城市都有自己的节奏，找到你的那个频率。", socialLinks: { bilibili: "#" }, relatedIds: ["vlog-001"] }
    },
    {
        id: "vlog-005",
        category: "vlog",
        title: "用 AI 制作毕业纪念 Vlog｜青春永不散场",
        cover: getPlaceholder("grad", 640, 360),
        date: "2026-02-05",
        author: "站长",
        views: 22100,
        copies: 6800,
        duration: "08:12",
        tags: ["Vlog", "毕业", "青春"],
        opening: { summary: "四年转瞬即逝，用 AI 把那些来不及记录的瞬间还原出来。", preview: "" },
        main: {
            steps: [
                { title: "教室的午后", description: "还原大学教室的阳光午后。", prompt: "Warm afternoon sunlight flooding through university classroom windows, empty desks with scattered books and notes, dust particles dancing in golden light beams, nostalgic peaceful mood, slow pan, 4K cinematic", params: { model: "Sora 2", duration: "12s" } }
            ]
        },
        closing: { summary: "青春不是一个年龄，是一种心态。", socialLinks: { bilibili: "#", douyin: "#" }, relatedIds: ["vlog-003"] }
    },

    // ===== 栏目二：爆火提示词 =====
    {
        id: "prompt-001",
        category: "viral-prompts",
        title: "全网爆火！一句提示词生成电影级预告片",
        cover: getPlaceholder("trailer", 640, 360),
        date: "2026-02-13",
        author: "站长",
        views: 89000,
        copies: 34200,
        duration: "03:42",
        tags: ["爆火", "Sora", "电影预告"],
        opening: { summary: "这个提示词在全网疯传！只需一句话就能让 AI 生成好莱坞级别的电影预告片。", preview: "" },
        main: {
            steps: [
                { title: "核心提示词", description: "直接复制即可使用。", prompt: "A cinematic movie trailer for an epic sci-fi film. Opening shot: massive spaceship emerging from clouds over a dystopian city. Cut to: close-up of a determined female protagonist with scars on her face, wind blowing her hair. Cut to: explosive battle sequence with laser beams and collapsing buildings. Final shot: title card slamming onto screen. Aspect ratio 16:9, dramatic lighting, Dolby Vision HDR, directed by Denis Villeneuve style.", params: { model: "Sora 2", duration: "30s" } },
                { title: "镜头语言拆解", description: "使用电影术语控制叙事。", prompt: "// 镜头切换：Opening shot → Cut to → Close-up → Wide shot → Final shot\n// 风格锚定：Denis Villeneuve / Christopher Nolan / Wes Anderson", params: { tip: "电影术语" } }
            ]
        },
        closing: { summary: "掌握镜头语言 + 风格锚定，你也能一句话出大片。", socialLinks: { bilibili: "#", douyin: "#" }, relatedIds: ["prompt-002"] }
    },
    {
        id: "prompt-002",
        category: "viral-prompts",
        title: "抖音爆款：AI 吉卜力风格动画一键生成",
        cover: getPlaceholder("ghibli", 640, 360),
        date: "2026-02-11",
        author: "站长",
        views: 125000,
        copies: 56700,
        duration: "04:15",
        tags: ["爆火", "吉卜力", "GPT-4o"],
        opening: { summary: "最近全网都在玩吉卜力风格转换，今天来拆解这个提示词模板。", preview: "" },
        main: {
            steps: [
                { title: "吉卜力风格模板", description: "几乎可以把任何场景转化为宫崎骏动画风格。", prompt: "Transform this scene into a Studio Ghibli animation style: [你的场景]. Soft watercolor textures, hand-painted backgrounds, warm natural lighting, Hayao Miyazaki aesthetic, gentle breeze moving through grass and hair, whimsical atmosphere, 16:9.", params: { model: "GPT-4o / DALL·E 3" } },
                { title: "自拍变吉卜力角色", description: "上传自拍变动画人物。", prompt: "Convert this photo into a Studio Ghibli character portrait. Keep key facial features, render in Miyazaki's signature style. Soft watercolor, warm lighting, rosy cheeks, expressive eyes, hand-drawn line quality, pastel palette.", params: { model: "GPT-4o" } }
            ]
        },
        closing: { summary: "核心关键词：watercolor、hand-painted、Miyazaki aesthetic。", socialLinks: { bilibili: "#" }, relatedIds: ["prompt-001", "prompt-003"] }
    },
    {
        id: "prompt-003",
        category: "viral-prompts",
        title: "小红书刷屏：AI 一键生成苹果风产品宣传片",
        cover: getPlaceholder("apple", 640, 360),
        date: "2026-02-09",
        author: "站长",
        views: 45600,
        copies: 18900,
        duration: "05:20",
        tags: ["爆火", "产品", "商业"],
        opening: { summary: "做电商的朋友注意了！这组提示词可以生成苹果级别的产品宣传片。", preview: "" },
        main: {
            steps: [
                { title: "产品宣传片提示词", description: "以耳机为例。", prompt: "Product commercial for premium wireless earbuds: dramatic reveal floating in mid-air against pure black background with volumetric lighting. Slow 360-degree rotation. Transition to lifestyle shot on subway. Close-up charging case clicking shut. Apple-style aesthetic, clean lighting, 4K.", params: { model: "Sora 2", duration: "20s" } }
            ]
        },
        closing: { summary: "纯净背景 + 慢旋转 + 生活场景切入 = 苹果风。", socialLinks: { douyin: "#" }, relatedIds: ["prompt-001"] }
    },
    {
        id: "prompt-004",
        category: "viral-prompts",
        title: "Sora 逆天！AI 生成赛博朋克城市飞行镜头",
        cover: getPlaceholder("cyber", 640, 360),
        date: "2026-02-07",
        author: "站长",
        views: 67800,
        copies: 29400,
        duration: "02:58",
        tags: ["爆火", "赛博朋克", "Sora"],
        opening: { summary: "用一段提示词让 Sora 生成赛博朋克城市的 FPV 无人机飞行镜头，效果离谱！", preview: "" },
        main: {
            steps: [
                { title: "赛博飞行镜头", description: "FPV 视角穿越霓虹城市。", prompt: "FPV drone shot flying through a cyberpunk cityscape at night, weaving between towering neon-lit skyscrapers, holographic advertisements floating in the air, rain-slicked streets below reflecting colorful lights, Blade Runner 2049 aesthetic, smooth continuous shot, 4K HDR, aspect ratio 21:9", params: { model: "Sora 2", duration: "20s" } }
            ]
        },
        closing: { summary: "关键：FPV drone shot + weaving between + 连续镜头描述。", socialLinks: { bilibili: "#", douyin: "#" }, relatedIds: ["prompt-001"] }
    },
    {
        id: "prompt-005",
        category: "viral-prompts",
        title: "一招让 ChatGPT 变成顶级文案大师",
        cover: getPlaceholder("copy", 640, 360),
        date: "2026-02-06",
        author: "站长",
        views: 93200,
        copies: 42100,
        duration: "06:30",
        tags: ["爆火", "ChatGPT", "文案"],
        opening: { summary: "这个 System Prompt 能让 ChatGPT 写出媲美 4A 广告公司的顶级文案，已被上万人收藏。", preview: "" },
        main: {
            steps: [
                { title: "文案大师 Prompt", description: "设定角色 + 风格约束 + 输出格式。", prompt: "你是一位获得过戛纳金狮奖的顶级广告文案总监，拥有20年经验。你的文案风格特点：\n1. 第一句必须让人停下来思考\n2. 善用隐喻和感官描写\n3. 结尾总能给人意想不到的反转\n4. 用最少的字传递最强的情感\n\n请按以下格式输出：\n【标题】不超过10个字\n【副标题】一句话概括\n【正文】200字以内\n【行动号召】一句话\n\n主题：[你的产品/主题]", params: { model: "ChatGPT / GPT-4", type: "System Prompt" } }
            ]
        },
        closing: { summary: "角色扮演 + 风格约束 + 格式模板 = 稳定高质量输出。", socialLinks: { bilibili: "#" }, relatedIds: ["prompt-002"] }
    },
    {
        id: "prompt-006",
        category: "viral-prompts",
        title: "Midjourney 终极人像提示词，出图即精修",
        cover: getPlaceholder("portrait", 640, 360),
        date: "2026-02-04",
        author: "站长",
        views: 78400,
        copies: 35600,
        duration: "04:50",
        tags: ["爆火", "Midjourney", "人像"],
        opening: { summary: "这组人像提示词出图质感堪比专业摄影师后期精修，直出可用。", preview: "" },
        main: {
            steps: [
                { title: "人像精修提示词", description: "关键在于光线和皮肤质感的描述。", prompt: "Portrait photography of a young woman, soft Rembrandt lighting, catch light in eyes, creamy bokeh background, natural skin texture with subtle pores visible, magazine editorial quality, shot on Hasselblad H6D-100c with 80mm f/1.9 lens, color grading inspired by Peter Lindbergh --ar 3:4 --v 6 --style raw", params: { model: "Midjourney v6" } }
            ]
        },
        closing: { summary: "核心：具体镜头参数 + 光线描述 + style raw。", socialLinks: { bilibili: "#", douyin: "#" }, relatedIds: ["prompt-004"] }
    },
    {
        id: "prompt-007",
        category: "viral-prompts",
        title: "AI 动态表情包生成器，一次出一整套",
        cover: getPlaceholder("emoji", 640, 360),
        date: "2026-02-02",
        author: "站长",
        views: 41200,
        copies: 22300,
        duration: "03:15",
        tags: ["爆火", "表情包", "DALL·E"],
        opening: { summary: "一句提示词生成一整套风格统一的表情包，社恐人的救星！", preview: "" },
        main: {
            steps: [
                { title: "表情包套装提示词", description: "一次生成多个表情。", prompt: "Sticker sheet of a cute round cat character showing 9 different emotions in a 3x3 grid: happy, sad, angry, surprised, sleepy, love, laughing, confused, cool. Each expression in a separate white circle, consistent character design, kawaii style, bold black outlines, pastel colors, white background", params: { model: "DALL·E 3" } }
            ]
        },
        closing: { summary: "关键词：sticker sheet + 3x3 grid + consistent character design。", socialLinks: { douyin: "#" }, relatedIds: ["prompt-002"] }
    },
    {
        id: "prompt-008",
        category: "viral-prompts",
        title: "AI 海报设计！一句话出高级感排版",
        cover: getPlaceholder("poster", 640, 360),
        date: "2026-01-30",
        author: "站长",
        views: 55100,
        copies: 24800,
        duration: "04:40",
        tags: ["爆火", "设计", "Midjourney"],
        opening: { summary: "不会设计也能出专业海报！这个提示词模板让 AI 帮你搞定排版。", preview: "" },
        main: {
            steps: [
                { title: "高级海报提示词", description: "控制排版和视觉层次。", prompt: "Modern minimalist poster design for a tech conference, bold sans-serif typography as the hero element, negative space usage, two-color scheme (black and electric blue), geometric shapes as accents, grid-based layout, Swiss design principles, clean professional aesthetic, print-ready quality --ar 2:3 --v 6", params: { model: "Midjourney v6" } }
            ]
        },
        closing: { summary: "Swiss design + negative space + bold typography = 高级感。", socialLinks: { bilibili: "#" }, relatedIds: ["prompt-006"] }
    },

    // ===== 栏目三：AI 学习班 =====
    {
        id: "class-001",
        category: "ai-class",
        title: "投稿｜如何用 Midjourney 打造个人 IP 形象",
        cover: getPlaceholder("ip", 640, 360),
        date: "2026-02-08",
        author: "小鱼同学",
        views: 5600,
        copies: 1890,
        duration: "07:20",
        tags: ["学习班", "Midjourney", "IP设计"],
        opening: { summary: "社区成员「小鱼同学」分享了用 Midjourney 打造个人 IP 角色的全过程。", preview: "" },
        main: {
            steps: [
                { title: "IP 角色基础设定", description: "确定角色基本形象。", prompt: "Character design sheet, cute chibi-style girl with short blue hair, round glasses, wearing a yellow hoodie with a small robot pin, cheerful expression, multiple angles: front, side, three-quarter, back view, flat color illustration --ar 16:9 --v 6", params: { model: "Midjourney v6" } },
                { title: "表情包拓展", description: "保持角色一致的表情组。", prompt: "Emoji sticker sheet of cute chibi girl with blue hair and glasses in yellow hoodie: happy, sad, shocked, sleeping, angry, laughing, love eyes, thinking, celebrating, confused. Each in circle, consistent design, clean flat style --ar 1:1 --v 6", params: { model: "Midjourney v6" } }
            ]
        },
        closing: { summary: "感谢小鱼同学！如果你也想投稿，欢迎联系我们。", socialLinks: {}, relatedIds: ["class-002"] }
    },
    {
        id: "class-002",
        category: "ai-class",
        title: "投稿｜零基础用 ChatGPT 写爆款短视频脚本",
        cover: getPlaceholder("script", 640, 360),
        date: "2026-02-06",
        author: "阿杰",
        views: 8900,
        copies: 3200,
        duration: "09:15",
        tags: ["学习班", "ChatGPT", "脚本"],
        opening: { summary: "社区成员「阿杰」手把手教你用 ChatGPT 从零写出爆款短视频脚本。", preview: "" },
        main: {
            steps: [
                { title: "角色指令", description: "给 ChatGPT 明确定位。", prompt: "你是一位资深短视频编导，擅长 1-3 分钟情感类短视频。特点：\n1. 开头 3 秒有钩子\n2. 每 15 秒一个小高潮\n3. 结尾有情绪升华\n4. 旁白口语化、有温度\n\n请根据主题创作脚本：[你的主题]", params: { model: "GPT-4" } }
            ]
        },
        closing: { summary: "感谢阿杰的分享！想看完整教程请点击下方链接。", socialLinks: { bilibili: "#" }, relatedIds: ["class-001"] }
    },
    {
        id: "class-003",
        category: "ai-class",
        title: "投稿｜Stable Diffusion 本地部署保姆级教程",
        cover: getPlaceholder("sd", 640, 360),
        date: "2026-02-03",
        author: "科技小白",
        views: 12300,
        copies: 5600,
        duration: "12:30",
        tags: ["学习班", "SD", "教程"],
        opening: { summary: "社区成员「科技小白」分享了 Stable Diffusion 本地部署的完整教程。", preview: "" },
        main: {
            steps: [
                { title: "环境配置", description: "从零开始搭建 SD 环境。", prompt: "# Stable Diffusion WebUI 安装步骤\n1. 安装 Python 3.10.6\n2. 安装 Git\n3. git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git\n4. 下载模型到 models/Stable-diffusion/\n5. 运行 webui-user.bat", params: { type: "教程步骤" } }
            ]
        },
        closing: { summary: "感谢科技小白的保姆级教程！", socialLinks: { bilibili: "#" }, relatedIds: ["class-001", "class-002"] }
    },
    {
        id: "class-004",
        category: "ai-class",
        title: "投稿｜如何用 AI 做出高级感的播客封面",
        cover: getPlaceholder("podcast", 640, 360),
        date: "2026-01-28",
        author: "设计喵",
        views: 4200,
        copies: 1560,
        duration: "05:45",
        tags: ["学习班", "设计", "Midjourney"],
        opening: { summary: "社区成员「设计喵」教你用 AI 快速生成风格统一的播客封面系列。", preview: "" },
        main: {
            steps: [
                { title: "播客封面模板", description: "生成系列化的封面。", prompt: "Podcast cover art, minimalist design, bold number '01' as hero element, dark navy background with gradient accent stripe in coral color, clean sans-serif episode title, professional audio show branding, square format 1:1, modern graphic design --ar 1:1 --v 6", params: { model: "Midjourney v6" } }
            ]
        },
        closing: { summary: "感谢设计喵的分享！系列化设计的关键是固定元素+变量。", socialLinks: {}, relatedIds: ["class-001"] }
    }
];

// ============================================
// Data Layer — localStorage persistence
// ============================================

var LS_KEY = 'wutong_content_data';

// Load content: localStorage takes priority over hardcoded defaults
function loadContentData() {
    try {
        var stored = localStorage.getItem(LS_KEY);
        if (stored) {
            return JSON.parse(stored);
        }
    } catch (e) {
        console.warn('Failed to read localStorage:', e);
    }
    return CONTENT_DATA;
}

// Save content to localStorage
function saveContentData(data) {
    try {
        localStorage.setItem(LS_KEY, JSON.stringify(data));
    } catch (e) {
        console.error('Failed to save to localStorage:', e);
    }
}

// Reset to defaults (clear localStorage)
function resetContentData() {
    localStorage.removeItem(LS_KEY);
}

// Check if using custom data
function hasCustomData() {
    return localStorage.getItem(LS_KEY) !== null;
}

// Helper functions (all read from localStorage-aware loader)
function getContentById(id) {
    return loadContentData().find(function (item) { return item.id === id; });
}

function getContentByCategory(category) {
    return loadContentData().filter(function (item) { return item.category === category; });
}

function getAllContent() {
    return loadContentData();
}

function getRelatedContent(ids) {
    return ids.map(function (id) { return getContentById(id); }).filter(Boolean);
}

function getCategoryLabel(category) {
    var labels = { 'vlog': 'Vlog 展示', 'viral-prompts': '爆火提示词', 'ai-class': 'AI 学习班' };
    return labels[category] || category;
}

function getCategoryTagClass(category) {
    var classes = { 'vlog': 'tag-vlog', 'viral-prompts': 'tag-prompt', 'ai-class': 'tag-class' };
    return classes[category] || '';
}

function formatNumber(num) {
    if (num >= 10000) return (num / 10000).toFixed(1) + '万';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
    return num.toString();
}
