
const request = require('request')

request({
  method: 'POST',
  uri: 'https://notify-api.line.me/api/notify',
  header: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  auth: {
    bearer: 'dvR6TeBMQlqxEJDcRANBpTi6KyJlFMEWeEd9nTFLTbH', //token
  },
  form: {
    message: 'ทดสอบ', //ข้อความที่จะส่ง
  },
}, (err, httpResponse, body) => {
  if (err) {
    console.log(err)
  } else {
    console.log(body)
  }
})