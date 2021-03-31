/**
 * 按字母排序数据
 */

 export const sortByLetter = data => {
    const list = {}
    if (data.length > 0) {
      data.forEach(v => {
        if (!list[v.firstchar]) {
          list[v.firstchar] = [v]
        } else {
          list[v.firstchar].push(v)
        }
        if (v.skills && v.skills.length > 0) {
          // 技能标签按照xxx,xxx,xxx格式输出
          let skill = ''
          v.skills.forEach(m => {
            skill = skill + m.title + ','
          })
          v.skill = skill.slice(0, skill.length - 1)
        }
      })
    }
    if (list['#']) {
      const item = [...list['#']]
      delete list['#']
      list['#'] = item
    }
    return list
  }
  
  /**
   * 按关键字搜索
   */
  
  export const searchFriendList = (data, key) => {
    // 清空
    if (!key) {
      return data
    }
    const list = {}
    Object.keys(data).forEach(v => {
      list[v] = []
      console.log(data[v])
      data[v].forEach(m => {
        if (m.nickname.indexOf(key) !== -1) {
          list[v].push(m)
        }
      })
    })
    Object.keys(list).forEach((v, m) => {
      if (list[v].length === 0) {
        delete list[v]
      }
    })
    return list
  }
  