/**
 * 指定dom全屏
 * @param {HTMLElement} domElement 延迟
 */
 export const enterFullScreen = (function() {
    const bodyDom = document.body
    if (bodyDom.requestFullscreen) {
      return function(domElement) {
        console.log(1231231)
        domElement.requestFullscreen()
      }
    }
    if (bodyDom.mozRequestFullScreen) {
      return function(domElement) {
        domElement.mozRequestFullScreen()
      }
    }
    if (bodyDom.webkitRequestFullScreen) {
      return function(domElement) {
        domElement.webkitRequestFullScreen()
      }
    }
    if (bodyDom.msRequestFullscreen) {
      return function(domElement) {
        domElement.msRequestFullscreen()
      }
    }
  })()
  
  /**
   * 退出全屏
   */
  export const exitFullScreen = (function() {
    if (document.webkitCancelFullScreen) {
      return function() {
        console.log(234234)
        document.webkitCancelFullScreen()
      }
    }
    if (document.mozCancelFullScreen) {
      return function() {
        document.mozCancelFullScreen()
      }
    }
    if (document.msExitFullscreen) {
      return function() {
        document.msExitFullscreen()
      }
    }
  })()
  
  /**
   * 检查是否全屏
   */
  export function checkFull() {
    let isFull =
          document.fullscreenElement ||
          document.msFullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement
    if (isFull === undefined) isFull = false
    return isFull
  }
  