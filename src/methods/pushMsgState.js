import emitter from '@/methods/emitter'

export default function (res, title = '更新') {
  if (res.data.success) {
    emitter.emit('push-message', {
      style: 'success',
      title: `${title}成功`
    })
  } else {
    // 有些訊息是字串，有些則是陣列，在此統一格式
    let message
    if (typeof res.data.message === 'string') {
      message = [res.data.message]
    } else {
      message = res.data.message
    }
    // 老師提供的寫法較簡化
    // const message = typeof res.data.messgae === 'string'
    //   ? [res.data.messgae]
    //   : res.data.messgae
    emitter.emit('push-message', {
      style: 'danger',
      title: `${title}失敗`,
      content: message.join('、')
    })
  }
}
