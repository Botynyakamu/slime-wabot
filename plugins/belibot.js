let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╭═══ *〘 SEWA 〙*
║ ┅ ๑————————————๑
║┊ ⌲ Sewa = _15/grup (1 bulan )_
║┊ ⌲ Sewa = _30k/grup (8 bulan)_
║┊ ⌲ Sewa = _40k/grup (8 bulan)_
╰═ ┅ ═══════
╭═══ *〘 MEMEBER PREMIUM 〙*
║ ┅ ๑————————————๑
║┊ ⌲ _40K (premium 120 hari)_
║┊ ⌲ _30K (premium 90 hari)_
║┊ ⌲  _20k (60 hari premium)_
║┊ ⌲  _10k (30 hari premium)_
╰═ ┅ ═══════

༅ _*KEUNTUNGAN SEWABOT*_

✧ *Bot akan masuk gc*
✧ *Bisa Menyuruh Bot Buka/Tutup Group*
✧ *Kick Orang*
✧ *Add Orang*
✧ *Anti Link On*
✧ *Bisa Memasukkan Bot Ke dalam Grup*

*[❗] Jika Group Sepi 2 minggu, bot akan leave*

◪ *Jika Minat Hubungi creator kami*
◪ *Atau Masuk Group Official Bot*
_https://chat.whatsapp.com/F9dPQcOf82Z4Dc9uxE7Kh0_

▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Payment', '#payment', 'Creator', '#creator', m)
}

handler.help = ['sewa', 'sewabot']
handler.tags = ['info']
handler.command = /^sewa(bot)?$/i

module.exports = handler

let wm = global.botwm
