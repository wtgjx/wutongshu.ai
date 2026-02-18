// ============================================
// AI Prompt Showcase - Clipboard Utility
// ============================================

async function copyPrompt(text, btnElement) {
    try {
        await navigator.clipboard.writeText(text);
        showToast('✅ 提示词已复制到剪贴板！');

        // Button feedback
        if (btnElement) {
            const originalText = btnElement.textContent;
            btnElement.textContent = '✓ 已复制';
            btnElement.style.background = 'var(--green)';
            setTimeout(() => {
                btnElement.textContent = originalText;
                btnElement.style.background = '';
            }, 2000);
        }
    } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showToast('✅ 提示词已复制到剪贴板！');
        } catch (e) {
            showToast('❌ 复制失败，请手动选择复制');
        }
        document.body.removeChild(textarea);
    }
}

function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}
