
// document.addEventListener('DOMContentLoaded', function() {
//     const panel = document.querySelector('.shadow.panel');
//     const panelLinks = panel.querySelectorAll('a');
    
//     // 初始参数
//     const initialPanelTop = 0; // 初始top值
    
//     // 设置初始位置
//     panel.style.top = initialPanelTop + 'px';
    
//     // 1. 滚动时实时更新panel的top值 - 完全自由跟随
//     function updatePanelPosition() {
//         // 移动端时不执行此效果
//         if (window.innerWidth <= 1200) return;
        
//         const scrollTop = window.pageYOffset;
        
//         // 核心逻辑：panel的top值 = 初始位置 + 滚动距离
//         const newTop = initialPanelTop + scrollTop;
//         panel.style.top = newTop + 'px';
//     }
    
//     // 2. 优化滚动更新性能
//     let rafId = null;
//     let lastScrollTop = 0;
    
//     function onScroll() {
//         const scrollTop = window.pageYOffset;
        
//         // 只有当滚动位置确实发生变化时才更新
//         if (Math.abs(scrollTop - lastScrollTop) > 0.1) {
//             if (!rafId) {
//                 rafId = requestAnimationFrame(function() {
//                     updatePanelPosition();
//                     rafId = null;
//                 });
//             }
//             lastScrollTop = scrollTop;
//         }
//     }
    
//     // 监听滚动事件
//     window.addEventListener('scroll', onScroll, { passive: true });
    
//     // 3. 点击导航链接时的动画 - 同步更新panel的top值
//     panelLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
            
//             const targetId = this.getAttribute('href');
//             const targetSection = document.querySelector(targetId);
            
//             if (targetSection) {
//                 // 移除滚动监听，避免干扰动画
//                 window.removeEventListener('scroll', onScroll);
                
//                 // 计算目标位置
//                 const targetScrollTop = targetSection.offsetTop - 100;
//                 const currentScrollTop = window.pageYOffset;
//                 const scrollDistance = targetScrollTop - currentScrollTop;
                
//                 // 获取当前panel位置
//                 const currentPanelTop = parseInt(panel.style.top);
//                 const targetPanelTop = initialPanelTop + targetScrollTop;
//                 const panelDistance = targetPanelTop - currentPanelTop;
                
//                 const duration = 800; // 动画持续时间
//                 let startTime = null;
                
//                 // 动画函数
//                 function animateScroll(currentTime) {
//                     if (startTime === null) startTime = currentTime;
//                     const elapsed = currentTime - startTime;
//                     const progress = Math.min(elapsed / duration, 1);
                    
//                     // 使用缓动函数
//                     const easeProgress = customEase(progress);
                    
//                     // 更新页面滚动
//                     const newScrollTop = currentScrollTop + scrollDistance * easeProgress;
//                     window.scrollTo(0, newScrollTop);
                    
//                     // 同步更新panel位置 - 核心逻辑
//                     const newPanelTop = currentPanelTop + panelDistance * easeProgress;
//                     panel.style.top = newPanelTop + 'px';
                    
//                     // 如果动画未完成，继续下一帧
//                     if (progress < 1) {
//                         requestAnimationFrame(animateScroll);
//                     } else {
//                         // 动画完成后，重新添加滚动监听
//                         setTimeout(() => {
//                             window.addEventListener('scroll', onScroll, { passive: true });
//                         }, 50);
//                     }
//                 }
                
//                 // 自定义缓动函数 - 更平滑
//                 function customEase(t) {
//                     return t < 0.5 
//                         ? 4 * t * t * t 
//                         : 1 - Math.pow(-2 * t + 2, 3) / 2;
//                 }
                
//                 requestAnimationFrame(animateScroll);
//             }
//         });
//     });
    
//     // 4. 窗口大小变化处理
//     let resizeTimeout;
//     window.addEventListener('resize', function() {
//         clearTimeout(resizeTimeout);
//         resizeTimeout = setTimeout(function() {
//             if (window.innerWidth > 1200) {
//                 // 桌面端：重新计算panel位置
//                 const scrollTop = window.pageYOffset;
//                 panel.style.top = (initialPanelTop + scrollTop) + 'px';
//                 panel.style.position = 'absolute';
//             } else {
//                 // 移动端：恢复正常布局
//                 panel.style.position = 'relative';
//                 panel.style.top = 'auto';
//             }
//         }, 200);
//     });
    
//     // 5. 页面加载时的初始位置计算
//     function initializePanel() {
//         if (window.innerWidth > 1200) {
//             const scrollTop = window.pageYOffset;
//             panel.style.top = (initialPanelTop + scrollTop) + 'px';
//         }
//     }
    
//     // 6. 初始化
//     initializePanel();
    
//     // 7. 添加视觉反馈效果
//     panelLinks.forEach(link => {
//         link.addEventListener('mousedown', function() {
//             this.style.transform = 'translateX(8px) scale(0.95)';
//             this.style.backgroundColor = '#e3f2fd';
//         });
        
//         link.addEventListener('mouseup', function() {
//             this.style.transform = 'translateX(8px)';
//             this.style.backgroundColor = '';
//         });
        
//         link.addEventListener('mouseleave', function() {
//             this.style.transform = '';
//             this.style.backgroundColor = '';
//         });
//     });
    
//     // 8. 性能优化：页面不可见时停止动画
//     document.addEventListener('visibilitychange', function() {
//         if (document.hidden) {
//             window.removeEventListener('scroll', onScroll);
//             if (rafId) {
//                 cancelAnimationFrame(rafId);
//                 rafId = null;
//             }
//         } else {
//             window.addEventListener('scroll', onScroll, { passive: true });
//             updatePanelPosition();
//         }
//     });
// });
