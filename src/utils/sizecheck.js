const unitMap = ['B', 'K', 'M', 'G', 'T']

const getSize = (size, unit) => {
  return size * Math.pow(1024, unitMap.indexOf(unit))
}

const sizeMap = {
  file_model: getSize(1, 'G'), // 设计师发布模型文件大小限制（1G以内）
}

const exceedingSizeTip = {
  file_model: '上传的文件大小不能超过1GB'
}

export const checkExceedingSize = (size, type) => {
  const data = {
    isExceeding: sizeMap[`file_${type}`] < size
  }
  data.isExceeding && (data.tip = exceedingSizeTip[`file_${type}`])
  return data
}