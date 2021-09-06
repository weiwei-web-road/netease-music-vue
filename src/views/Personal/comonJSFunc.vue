<template>
  <div>
    <div>{{ dateTime ? TIMEZONE : '' }}</div>
  </div>
</template>

<script>
import moment from 'moment'

// convert time zone
function getTimezone () {
  const abbrs = {
    EST: 'EST',
    EDT: 'EST',
    CST: 'CST',
    CDT: 'CST',
    MST: 'MST',
    MDT: 'MST',
    PST: 'PST',
    PDT: 'PST'
  }

  moment.fn.zoneName = function () {
    const abbr = this.zoneAbbr()
    return abbrs[abbr] || ''
  }

  const zone = moment.tz.guess() // get location
  return zone.indexOf('America') === 0 ? moment.tz(new Date(), zone).format('zz') : ''
}
const TIMEZONE = getTimezone()

export default {
  data () {
    return {
      TIMEZONE: TIMEZONE, // TIMEZONE is getTimezone(), will be executed
      dateTime: new Date()
    }
  },
  methods: {
    // fix number format
    fixNumFormat (point) {
      let str = Number(point * 100).toFixed()
      str += '%'
      return str
    },
    // time duration format
    timeDurartionFormat (millSec) {
      const d = moment.duration(millSec, 'milliseconds')
      const hours = Math.floor(d.asHours())
      const mins = Math.floor(d.asMinutes()) - hours * 60

      return millSec ? hours + ' hr ' + mins + ' min' : ''
    },
    // moment date time format
    dateFormat (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
      const zone = moment.tz.guess() // get curr local location
      return dataStr ? moment.utc(dataStr).tz(zone).format(pattern) : '' // convert utc to local time by timezone
    },
    // open pdf in a new window, need the back-end give the pdf format
    openPDFByNewWiondow (data) {
      const changeJsonToString = param => {
        const temp = []
        for (const k in param) {
          temp.push(k + '=' + encodeURIComponent(param[k]))
        }
        return temp.join('&')
      }
      const payload = data.data
      const payloadString = 'url' + '?' + changeJsonToString(payload)
      window.open(payloadString, '_blank')
    }

  }

}
</script>
