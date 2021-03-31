// 下载通用方法
export const downloadTool = (url) => {
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.style.height = 0
    iframe.src = url
    document.body.appendChild(iframe)
    setTimeout(() => {
      iframe.remove()
    }, 5 * 60 * 1000)
  }
  