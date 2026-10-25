/* ============================================================
   全站小脚本：移动端菜单 + 当前页高亮 + 页脚年份
   一般不需要改动
   ============================================================ */

// 移动端：点击按钮展开/收起导航菜单
document.querySelector('.nav-toggle')?.addEventListener('click', function () {
  document.querySelector('.site-nav').classList.toggle('open');
});

// 点击菜单项后自动收起（移动端体验）
document.querySelectorAll('.site-nav a').forEach(function (a) {
  a.addEventListener('click', function () {
    document.querySelector('.site-nav').classList.remove('open');
  });
});

// 根据当前页面文件名，高亮导航栏对应项
(function () {
  var page = (location.pathname.split('/').pop() || 'index.html').split(/[?#]/)[0];
  document.querySelectorAll('.site-nav a').forEach(function (a) {
    var href = (a.getAttribute('href') || '').split(/[?#]/)[0];
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// 页脚自动年份：<span data-year></span>
document.querySelectorAll('[data-year]').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});
