// Auto-scale fixed-size assets to fit mobile viewports
// Finds .fixed-asset elements and scales them to fit the screen width
document.addEventListener('DOMContentLoaded', function() {
  var asset = document.querySelector('.fixed-asset');
  if (!asset) return;

  function scaleAsset() {
    var viewportWidth = window.innerWidth;
    var assetWidth = asset.getAttribute('data-width');

    if (viewportWidth < assetWidth) {
      var scale = (viewportWidth - 32) / assetWidth; // 16px padding each side
      asset.style.transform = 'scale(' + scale + ')';
      asset.style.transformOrigin = 'top left';
      asset.style.marginBottom = '-' + (asset.offsetHeight * (1 - scale)) + 'px';
    } else {
      asset.style.transform = 'none';
      asset.style.marginBottom = '0';
    }
  }

  scaleAsset();
  window.addEventListener('resize', scaleAsset);
});
