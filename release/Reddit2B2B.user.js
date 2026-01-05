// ==UserScript==
// @name             Reddit++
// @namespace        RedditPlusPlus
// @version          1.2.2
// @author           lnm95
// @icon             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAQRklEQVR4nN2bCZAc1XnHf6+75569L0lI6DJCAmIQESBBEnFIwhyKwmHsshMnBRhSwQZifCSOKxw+iEPABldMUmCb4KtiCDKXicRhCZAAQSQkJJCwVtrVXtpzdmfnnu5+qdczOzuzO7M7e2BC/lVTuz3b773v+7/vescKpgi5fooNBB9HcgNwMbAE0Eq8B2nABurnw6KPQUUlhIbg6P4hQv0/wc0PEByhhNTi+alqA8bUm0yCrQguYS02m5Bcg2ReWe0sRY0LTloOl16PPHM9VDZAfwe89Isq8dwjX6C3x4ebuxB0zpa4s0dAgGqi3MwGrgcWTKmtADsG6flNcPkNuDZ+YXSSq+qhaRHS5TXEQ9+6AezTgFuB3Vl7mRGKm+NU4KYGwTeJ0grcOWXltQwBvzPh5wMeftGSpDs0iJQyR4L0V2KfeSGyqV6Q5jxsdiB4CDHFsUoMn4MadLJPDuehIfkyKY4g+QZQOeXRdehI6dzWVsXGnhP48hGNn728m6PNR5DWyORKTCFIBWqwfX71iEO75Foku4BbcvKvn6IO03YBm2Xs5FEE50yrvVCCQldS5+bOWvaKOv44GGb1Qh91G9ZQdfIKYrbElUiS9nqIKkE7WvGEex3S8oLgHOD7CP4ajUuwaGGDgK1ywuHzMXUXEPwNgv9BTkN5kf1oEEbnxwMVbLcbuKrO5JtN/dwY7OFq2UJgqIeuJLTZHjpjEN+zC9eWR9DC0cyUjc0CkuVYHEBws/O8ofzkVvDmWPMowJ1CYwf3AF+astI2GdO1GDFh9iXg8rY5nN/o4V+qO2gUJiQgVemn/9xPMnzmxViVDRih49TsfIyat55Gt6Uy/lwfJcb7J7by9YmUEULkvV4OAecKH0F+DlxR9O8y7yPy7Epmlc/FagNcbmzNxbNhnU+1VfPTZXE2eeMYZgrSKUiZzvtWdQArWI0R6UMbTmb6dOVJPfEkbybCZ9kp45MRMHkMyCj/G+D8ksqbI7MrQJMZQUX2+7QAL1DbCE0LYeFyrIaF+PvSXLDrGEsvWI4RMKHrCLT/Do63QH8Pen8UXZm8K6u4IjEpQMhMHCjmCqO4wpH5XHFpKRJyZBToMs4ChGAD/1Vy5hNZxZuqkQtOAa8f0d0CrYdhWH3vRa66BM68AJafA/UngMuL1A1StiScMKnxuTEUaaYJ6QT0dcDBN2DPdsSup6E7BRU4laGcuwSiw4i2d6F7KEOEf0KX2Mx5XM3tsqBeKN8FLhZ3I/m7ol3HgOpKWPcZ5NqroaYRNB0SUdizDXraYcUqWLEaaprAX5gl8wceJ38sDIM9cOBVeG83NC2AleeDL5gharAb8dtfwYu/hMGIKsImwn1slbdNnYAN4hYnxRRDCvBWwhXXIa+4BRoXFr6kSIgOQV15VXBJKHkGuiBQBd4xWnYfRTxxP/z6R5CMZIJjKQhuYov8YfkEXCIWYXMA6RhYIZQxhYGNn0TeeM945fMw4SxPKG+Z7RQJ/3YbbNmcsYLSMSGCziqek4cYQ0DxOsDiuaLKk/X5gIG95nLsMpQfyYDlZmaRlzyYpJ1sWoy1eiPSq0+2Kghi8aiTysdgPAEZ019esisb7Npq0v5qh4ucMKrMzFfCtokPhRk4dIhweztmMjEpCU7iSCUZ7uwkdPAQiaGw00+xdiI7F2ZFLbIqWI6Jnc2r42uYQgIuFmpx8bXJpJS2RTptkhzJgLaNrdwnL4YMtLbxznfv4sh1Gzl682fofWU7ZsosSYKjfNqk9+VtHL3pUxz9/Cb23/sdBtrac+84liEltm07WwcqCaWTKbBkeSYm+AcuFzWlCYCvAHMn7EQHbSBM4vgxwilJTGYEl7bMreAi0SR9W57B/9SPWWE287F5En33VpIqPRYx65HnRPNB7McfZOHh11i+WKeydRf9r7zIcH8oY1VKeSkxLctZH4QTFqmuFrRwpFwfqyZZaAU5AuQGZ2n5V5N2oYOwLTw7niC69zW6bEhIkRUu80q0sx1z306akiEqmiRBsx3/20+jtR/KFY35GPlO62omePhlqmstgr4Q9R17sN7aTux4d0bGrJXFpcZxCfG9O3DvfBJMu/xVjeBm+WdUjyMA4ezeVJTViRcCB16jcvN9iD2vk7Sk44/KFRTslImbKEGV+v0S2lrwDrbikokJXdWNScCTyBQ+4S58/YO44v1ImZlex9WU2ZsW2ls7qdh8H/79b4CnTOUzqCTKF8cTYHNT2V2oitc2aXjlCeY99T30vg5SQiMtbdK2xD1nLr6VZ2EuqEd63OD3Y/zhRRgLThrZ/yj60RcsxTj7IqgIIF0urAX1+FaejWfunIzp25K00ND725n71L3U73gSzTKns6j//EjUUMWk2khYC/ztlLpQsSAORjKKtew0UotOBdPCtixclQH0+nmYbjcuXzXi5LMQm26Fk1Y51fVIxhh1B6G+RtTMgXlLsawkdtWJxM+6FM+6P8c9b54TdE0JaUPHtfclgs89it43mNmGmUqRkUEVS9h25xFaMtxJPlt2os6HxwnDyK6jpNO2s4sjpYUel7jmL4HP3U4qFkVXawS3QSKRJB6JkE6lMJW7ZLOGYRi4XW58wQCeZefA4lXY8SiegB8pNMxEEsuysDRdcYzR1YpMJUdXh9OBxiZgm5GdgLXT6sQFeqwH14GXSa67DsvrxZa2s27XbInhcmMEK4nGE9x793d48/XXnZkcSWUyGzV1w0DXBYams+qcc/jq1/4eT7ASy7IxzRS2aWVyvrSxYiEqD2xDj3ZPvjcwESRXKqs35CUsxWTZNFmEtIX74B70Xc8wvPoqPJqGx0qg64bjDpbLjcdtEBse5pVtvyWZSIDbB5qGUK7gbJjYkErg9rhZceoK3G6DVCrtKK9SniIg5faSMgXB15/GdWA3pKypBr+xOFFlPv2OJVwEXDPtblRAjMfQBzoYPPF0YlXznGgtkwlMKbFsC03XaWxqIhwe4v3mZuxEHKSW3SWywEzi8vq48qqruO6GG6mtrycej5NMp0klU8SEm6h0oTfvpeFX38Lb9j5Cl7Oxp71bEfCXzh7vDAhQM+np7oDEMJG6E4lWzSVlK72SpNNpkqk0CxcvYeGixbh9AdISjGAF3qoqauobWLRkKZuuzCj/8ZVn0jcwQFzFi5TtKB+XBq7mPTQ++32q39qSUV6fsfJqApqF3OAsfD4xw46yuz/QvfYajq+7lvj8P0AIDYGFZtvomqC2tppELMq+vXt55713icbj+D0+Tj11OStPPwNfoILQ4KDj+xY6ttCcvB9o3cecFx6i8ZXHM4Fv9o5zHlcEvIlk1ax0l84QET3pdHrW30DojE9guoOOidu26bzichn4vT48Hje6pjnukkymiSfipNKZd9TGitDd6MkwNe88T9PzDxM8tCcT9GbxMM+UvCtS6+hxCRpmrVeV3Uwdq7KW2ClrGF51GfFla0hWNWIZXqTQnUwhle+rNCgEQjdAEwjLQk8ncA/34Du4g6pdTxE4uAs9MogwrNnw+UIIjisLSCIn3E8pD0vWwvzsKlq5xN4XkeF2rMp6rMZ5pBecgqk+DYuxKuqQhgep6wiVAdIxtEgIV08LxrH9GO3vYXR3YoR7Eenk6Cbrn9w4Kkq4H95+fKZSJ4RcP+1MOoozroZ/fqzgq95D79Jw46mZ2KACls+LDNQj/dVIvx+8rsweorQgnoZYDC02hIj2QjyRIdHFaLC760VYfWGu/1QqRfJH91Cx+RszEn12PKqyruBxcHCQ5sFhGjxk/FZFsngCMdSOsNpHzw5Gqs+RAxM9W126i6yZ6+cUPLa2HsObSJS5eisNI7uv4J1hPwXo6+t3Pjnb0rIjjIwixxxs55NRhj0ODAzQ199HfTQ6U1FT6oR3cKa95EPV7Cr3KxMtQOHqJ6O0NuYUqUxnVOW0GsO2ZnY9wJQMaSkIzaiXDxUzC1+GoFVz6+yfbRXUtrOmzXbOGj+GGL/JO8VO6NOcM/VZhBJMLW/9/uK76rMBXdfwer24vb6Z9SbZp2rVfbMpnJr5QCDAnDlNs9ltATweDzXVNQSra6bQqghs3jQQbC/Lla79IQRKJJ2GwiOwioogbrcL+6b/KO0Ke1+Fl/999FkVUpddX3r8usbcr4qAhoZ6PGsugLk/Ld3mZ3dAqLn0393scZKPXO9ccDqx5IvX3A3XFz8jLQaVCSaLA11dx2n64mq0cGvmi5+0wAmlT5ryIbMbKrpeekmYTCYZ+s1jND74F6VeeV88z8kZCQVPTDhi0/yyBBuBUjz//G0s+vv7aT3WSuSE00f/Uqby+WOUgpqAY8fa6ExYpTtQlp+rBG2eRDh37yZFKBTCNM3cDLtcLsck1U+R3fBUOTqRSDi1wNgjd7XTc7z7OB0dnSxLJsYNF4lEnLbOIUs2oKr+3W53bsaVgk4pnMzsFeaPYat7B+Ewbe3t6AP9pdWRzo2XLAEvsJ0NtCFL3LvrbicWizmsDg4N5ghQSldVVjn+WFVV5QioTDMajdLd3UNocJSsEagiRpE4NDSEL3RsdIyOVtql4ZCjFFNKKYJVNqmvq6eurhafz+d8r5QfGAg51aAaS405Mob6PRaLO9Xi4lB3qdlvEVvzLEBk3Orh7EXH8Xj+YVK6B/9AP3o8njmwVLPjdhOorMJ38mnoF27MECslw8MROjo7mfvSYwhNQ9ONnIBS2jSZJoHhPnyhg6PEPPiPGHOXUTscxkqnMwToOl6/n8raejyXfxp8PqcfRVBvXy/xt3ZQ0/oumqaj6VrubFlViAsskwXHdhcnwOZfR34dXQyleQAXtxW98BhqpvqXXxo9TxoLtUzNEqCgTFiZ4UW7HizVYhxcux5lzkQvnLculwmUFamZr205wClTGMOBYBjBf4485iKJ2MYgkgem1ltxKL+07Rlf4y0JZR1OpplOtWnziNhK28hjYQ8e7lOr2ZkIN2LqE2WB2YAThCdIgyXQhebcdcyhkIBnZAjJtz9QyT9cfJctsi1fgvE29EeOFbzx/1D5g2yV94/9cjwB6k6d7pwVRKYziqoB0mb6A40BKrWappU7WisDMQSXFnuteBRRt6nEJFdlikAFp97ePifPq5OdDwJqu03l/+HhYWzLLHeEryM5Wj4BCupeneR7ZXUf7neKk8OHm2k+coTOzi5kJDy76sci9PT0Ov2rgkyR7ErGJm+nLk/D/aWu0E98U1TtOKzn8ZJXZfOQXn4ZPUtXEQuHYXiAE1pewz/4fpnaTQ5ZvYTwyj9lQPeSjEao7D3KvMPPTtxOsJmtXDVWsandFs9cln4bpnmC/OFhGxGKXpae/KJkPir46kdQ+c2O8kEmDUQTE3CxuB3JHbMp2e8B9zk3xNXMl/GvM6UPRj56ykeczJV3KbocFK1X5QY+WsoLdqHxOfHfHJpq03Eu8BFTXi3gvsK5rJmO8gqFWWAdtyLKzP0fLsIIfoCLe8WzMzvYKYwBGp+ehbPiDxJqIfMwAR4Qv56dI71CAgTd/wcJOOZs2qp9yxfYLmZ6HjYGYwm4Bcki51/ef79Ql4gHEY4570fS4hzYpNkmtjF6X362AfwvvG5Pojz6v/sAAAAASUVORK5CYII=
// @source           https://github.com/lnm95/redditPlusPlus
// @license          MIT
// @match            *://*.reddit.com/*
// @grant            unsafeWindow
// @grant            GM_getValue
// @grant            GM_setValue
// @grant            GM_deleteValue
// @run-at           document-start
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Reddit2B2B.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Reddit2B2B.meta.js
// ==/UserScript==
(()=>{var Xn={"./src/modules/app.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`faceplate-banner {
  max-width: 1000px !important;
}
.pp_hidden {
  display: none !important;
}
`,""]);const y=m}),"./src/modules/biggerFonts.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`:is(.text-14-scalable):not(.pp_defaultText .text-14-scalable) {
  font-size: var(--pp-biggerFonts-Content) !important;
  line-height: 1.4rem !important;
}
faceplate-hovercard .text-12 {
  font-size: 0.9rem !important;
}
shreddit-composer > div[role='textbox'] {
  font-size: var(--pp-biggerFonts-Content) !important;
  line-height: 1.4rem !important;
}
:is(.text-12):not(.pp_defaultText .text-12) {
  font-size: var(--pp-biggerFonts-Other) !important;
}
shreddit-comment-action-row {
  margin-bottom: 15px !important;
}
`,""]);const y=m}),"./src/modules/bookmark.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.pp_bookmark_hiddenButton {
  width: 32px;
  height: 32px;
  position: absolute;
  opacity: 0 !important;
  overflow: hidden;
}
.pp_bookmark_hiddenButton > div {
  padding: 0px !important;
}
.pp_bookmark_post {
  margin-right: 5px !important;
}
`,""]);const y=m}),"./src/modules/collapseAwards.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.pp_awardButton {
  max-width: 100px;
  opacity: 1;
  transition: all 0.5s !important;
}
.pp_awardButton_hidden {
  display: none;
}
.pp_awardButton_collapsed {
  max-width: 0px !important;
  opacity: 0 !important;
  visibility: hidden !important;
}
`,""]);const y=m}),"./src/modules/comments/comments.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.pp_muted_avatar {
  opacity: 0.5;
}
.pp_muted_content {
  color: var(--pp-color-muted-conent);
  transition: color 0.2s;
}
.pp_muted_content:hover {
  color: var(--pp-color-muted-conent-hover);
}
:root {
  --pp-color-muted-conent: #a5a5a5;
  --pp-color-muted-conent-hover: #636363;
}
:root.theme-dark {
  --pp-color-muted-conent: #595959 !important;
  --pp-color-muted-conent-hover: #adadad !important;
}
`,""]);const y=m}),"./src/modules/comments/hideShare.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`shreddit-comment-share-button {
  display: none !important;
}
`,""]);const y=m}),"./src/modules/comments/sortButtons.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.pp_sortDropdown_hidden {
  display: none;
}
.pp_sortButton {
  color: var(--color-neutral-content-weak);
  font: var(--font-button-sm);
  text-wrap: nowrap;
  border-radius: 32px;
  height: 32px;
  padding-left: 10px;
  padding-right: 14px;
  gap: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 5px;
}
.pp_sortButton > span {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pp_sortButton:hover {
  background-color: var(--color-button-plain-background-hover) !important;
}
.pp_sortButton_active {
  color: var(--color-neutral-content-strong) !important;
  background-color: var(--color-secondary-background-selected);
}
`,""]);const y=m}),"./src/modules/comments/userTags.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.pp_tagsPanel {
  display: flex;
  justify-content: space-around;
  width: auto;
  border-bottom: solid 1px var(--color-neutral-border-weak);
  padding: 4px;
  gap: 8px;
  margin-bottom: 4px;
}
.pp_tagButton {
  cursor: pointer;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  height: 45px;
  padding: 4px 20px;
  margin: 0px 0px;
  color: var(--color-neutral-border-weak);
  border-radius: 5px;
}
.pp_tagButton svg {
  width: 20px;
  transition: transform 0.15s;
}
.pp_tagButton:hover svg {
  transform: scale(1.2, 1.2);
  transition: transform 0.3s;
}
.pp_tagButton:hover {
  background-color: var(--color-neutral-background-hover);
}
.pp_tagButtonActive:hover {
  opacity: 0.8;
}
.pp_tagHint_offset {
  left: 50%;
  position: absolute;
}
.pp_tagHintContainer {
  display: flex;
  justify-content: center;
}
.pp_tagHint {
  display: flex;
  align-items: center;
  position: absolute;
  top: -35px;
  height: 25px;
  padding: 0px 12px;
  color: var(--color-neutral-background-weak);
  font: var(--font-small);
  background-color: var(--color-neutral-content-strong);
  border-radius: 5px;
}
`,""]);const y=m}),"./src/modules/customFeed/customFeed.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.pp_customFeed_masthead_ico {
  width: 50px !important;
  height: 50px !important;
}
`,""]);const y=m}),"./src/modules/feed/feedButtons.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.pp_feedPanel {
  width: 100%;
}
.pp_feedPanel > div {
  justify-content: flex-end;
}
.pp_feedPanel_buttons {
  display: flex;
  gap: 4px;
  width: 100%;
  height: 40px;
}
.pp_feedPanel_settings_container {
  display: flex;
  align-items: center;
}
.pp_feedPanel_settings {
  color: var(--color-neutral-content-weak);
  border-radius: 18px;
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0px 8px;
  position: relative;
  cursor: pointer;
}
.pp_feedPanel_settings:hover {
  background-color: var(--button-color-background-hover);
}
.pp_feedPanel_settings:active {
  background-color: var(--button-color-background-activated);
}
`,""]);const y=m}),"./src/modules/feed/feedSettings/feedSettingsWindow.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.pp_feedSettings_overrideSub {
  z-index: 20;
  position: relative;
}
.pp_feedSettings_overrideSub::before {
  border-radius: 16px;
  border: 2px solid #ffc800;
  position: absolute;
  content: '';
  top: -8px;
  right: -8px;
  bottom: -8px;
  left: -8px;
  z-index: 15;
  pointer-events: none;
}
.pp_feedSettings_overrideTittle {
  color: #e1b30d !important;
}
.pp_ui_disabled {
  opacity: 0.5;
  filter: grayscale(1);
  pointer-events: none;
}
`,""]);const y=m}),"./src/modules/filters/filters.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.pp_hidden_comment > [slot='commentAvatar'] {
  display: none;
}
.pp_hidden_comment > [slot='commentMeta'] {
  display: none;
}
.pp_hidden_comment > [slot='comment'] {
  display: none;
}
.pp_hidden_comment > [slot='actionRow'] {
  display: none;
}
.pp_hidden_button {
  position: relative;
  left: -32px;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  width: fit-content;
  gap: 8px;
  background-color: var(--color-neutral-background);
}
.pp_blured_content {
  filter: opacity(50%) saturate(50%) blur(6px);
  max-height: 40px !important;
  user-select: none;
  cursor: pointer;
  overflow-y: hidden;
}
.pp_blured_content_area {
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
}
.pp_blured_content:hover {
  filter: opacity(75%) saturate(75%) blur(4px);
}
.pp_blured_content_animator {
  max-height: 9999px;
  transition: max-height 1s ease-in, filter 0.2s ease;
}
.pp_blured_button_container {
  display: flex;
  justify-content: center;
  max-height: 0px;
}
.pp_blured_button {
  border-radius: 8px;
  z-index: 1;
  pointer-events: none;
  position: relative;
  top: 6px;
  height: 100%;
  max-width: 75%;
  box-shadow: 0px 0px 0px 2px #ffffff61;
}
.pp_blured_button_content {
  display: flex;
  align-items: center;
  padding: 0px 16px;
  gap: 6px;
  color: #ffffff;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
}
.pp_blured_button_content > svg {
  min-width: 16px;
}
.pp_blured_button_content > span {
  display: block;
  overflow: hidden;
  padding: 6px;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  font-weight: 500;
  text-overflow: ellipsis;
}
`,""]);const y=m}),"./src/modules/filters/filtersWindow.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.pp_filter_list {
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 20px 40px;
  gap: 0.5rem;
  list-style: none;
}
.pp_filter_element {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  border: solid 2px;
  border-radius: 15px;
  box-shadow: var(--filterShadowColor) 0px 2px 4px 0px;
}
:root {
  --filterShadowColor: #d9d9d9;
}
:root.theme-dark {
  --filterShadowColor: #5d5d5d !important;
}
.pp_filter_dragged {
  opacity: 0.25;
}
.pp_filter_element > div {
  width: 100%;
  padding: 0px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}
.pp_filter_element_dragAnchor {
  cursor: grab;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 48px;
  height: 40px;
  color: #8a8f91;
}
.pp_window_elementsContainer > .pp_filter_element:hover {
  background-color: var(--color-neutral-background-hover);
}
.pp_filter_element_colorPicker {
  cursor: pointer;
  width: 36px;
  height: 40px;
  margin: 2px;
}
.pp_filter_element_colorPicker > input {
  height: 100%;
}
.pp_filter_element_toggles {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.pp_filter_element_toggles > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}
.pp_filter_element_toggles > div > span {
  text-wrap-mode: nowrap;
}
.pp_filter_addButton {
  height: 3rem;
  border-radius: 15px;
}
`,""]);const y=m}),"./src/modules/filters/hiddenContent.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.pp_hiddenContent_button {
  position: fixed;
  width: fit-content;
  height: 50px;
  bottom: -100px;
  border-radius: 12px;
  border: solid 2px var(--color-button-secondary-background);
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0px 16px;
  cursor: pointer;
  user-select: none;
  transition: bottom 0.4s ease, background 0.15s ease;
}
.pp_hiddenContent_button:hover {
  background: var(--color-button-secondary-background);
  border-color: transparent;
}
.pp_hiddenContent_button:active {
  background: var(--button-color-background-activated);
  border-color: transparent;
}
.pp_hiddenContent_button > svg {
  min-width: 16px;
}
.pp_hiddenContent_button > span {
  font-weight: 500;
  text-wrap-mode: nowrap;
}
.pp_hiddenContent_button_visible {
  visibility: visible;
  bottom: 20px;
}
:root {
  --pp-backgroundButton: #848d9233;
  --pp-backgroundButtonActive: #e5ebee6e;
}
:root.theme-dark {
  --pp-backgroundButton: #3f484d33 !important;
}
`,""]);const y=m}),"./src/modules/header.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`#reddit-logo {
  text-decoration: none;
}
#user-drawer-content {
  max-height: 90vh;
  overflow: auto;
}
.pp_logo {
  width: max-content;
  color: var(--shreddit-color-wordmark);
  font-size: 22px;
  font-weight: 1000;
  letter-spacing: -2px;
}
`,""]);const y=m}),"./src/modules/notifications.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`click-card > div[slot='content'] {
  width: 410px !important;
  max-width: 410px !important;
}
click-card > div[slot='content'] > div {
  max-height: 550px !important;
}
notification-item > a {
  width: 100% !important;
}
div[data-testid='notification-item'] > .flex {
  padding: 0rem 0rem 0.5rem 0.5rem !important;
  width: 100%;
}
div[data-testid='notification-item'] > div > div > button {
  display: none !important;
}
div[data-testid='body'] {
  font-size: 1rem !important;
  line-height: 1.1rem !important;
  padding-top: 0.5rem;
}
`,""]);const y=m}),"./src/modules/posts/posts.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.pp_post_shareButton :is(span):not(.flex) {
  visibility: hidden !important;
  max-width: 0px;
}
.pp_post_shareButton .text-16 {
  margin-right: 0px !important;
}
.pp_post_tittle {
  text-decoration: none !important;
}
.pp_post_noWrap {
  line-clamp: 999;
  -webkit-line-clamp: 999;
}
.pp_post_unwrapContainer {
  position: relative;
  height: 0px;
  bottom: 0px;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
}
.pp_post_unwrapButton {
  position: relative;
  background-color: var(--color-button-secondary-background);
  width: 46px;
  height: 46px;
  bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  color: var(--color-button-secondary-text);
  margin-right: 15px;
  pointer-events: fill !important;
  z-index: 10;
}
`,""]);const y=m}),"./src/modules/posts/postsBackplates.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`article > shreddit-post {
  background-color: #00000000 !important;
  padding-top: 10px !important;
  margin-top: 10px !important;
  margin-bottom: 10px !important;
}
article > shreddit-post::before {
  border-radius: 15px !important;
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  z-index: -1;
  background: linear-gradient(var(--color-neutral-background-hover), var(--color-neutral-background));
  transition: opacity 0.2s;
}
article > shreddit-post:hover::before {
  opacity: 1;
}
shreddit-post[gold-count]:not(shreddit-post[gold-count='']) {
  background-image: linear-gradient(rgba(255, 214, 53, 0.2), rgba(255, 214, 53, 0)) !important;
}
shreddit-post[gold-count]:not(shreddit-post[gold-count=''])::before {
  background: linear-gradient(#fbed2966, var(--color-neutral-background)) !important;
}
.stickied::after {
  border-radius: 15px !important;
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 1;
  z-index: -2;
  background: linear-gradient(var(--stickiedColor), var(--color-neutral-background)) !important;
}
.stickied::before {
  background: linear-gradient(var(--stickiedHoverColor), var(--color-neutral-background)) !important;
}
:root {
  --stickiedColor: #0e8a001c;
  --stickiedHoverColor: #18900b3d;
}
:root.theme-dark {
  --stickiedColor: #0e8a001c !important;
  --stickiedHoverColor: #18900b3d !important;
}
`,""]);const y=m}),"./src/modules/profileMenu/profileMenu.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,"",""]);const y=m}),"./src/modules/profileMenu/profileMenuWindow.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.pp_profileMenuElement_tittleContainer {
  width: 100%;
}
`,""]);const y=m}),"./src/modules/redirect.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.pp_redirectContainer {
  position: fixed;
  bottom: 70px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 100;
}
.pp_redirectBox {
  background: #000000bf;
  width: 600px;
  height: 70px;
  border-radius: 20px;
  color: white;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
`,""]);const y=m}),"./src/modules/scrollToTop.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.pp_scrollToTop {
  position: fixed;
  width: 100px;
  height: 100%;
  bottom: 0px;
  background: linear-gradient(0deg, var(--scrollLineColor) 1%, var(--scrollLineTransparentColor) 30%);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20px;
  cursor: pointer;
  color: var(--scrollLineTransparentColor);
  opacity: 1;
  transition: padding-bottom 0.2s ease-in, color 0.2s ease-in, opacity 0.5s ease;
  clip-path: inset(0 0 0 8px);
}
.pp_scrollToTop svg {
  padding-left: 8px;
}
.pp_scrollToTop_inverted {
  transform: scale(1, -1);
}
.pp_scrollToTop:hover {
  padding-bottom: 50px !important;
  color: var(--scrollButtonColor);
  transition: padding-bottom 0.2s ease-out, color 0.2s ease-out, opacity 0.5s ease;
}
.pp_scrollToTop::before {
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  z-index: -1;
  background: linear-gradient(0deg, var(--scrollLineColor) 5%, var(--scrollLineTransparentColor) 50%);
  transition: opacity 0.2s ease-in;
}
.pp_scrollToTop:hover::before {
  opacity: 1;
  transition: opacity 0.2s ease-out;
}
:root {
  --scrollLineColor: #e5ebee6e;
  --scrollLineTransparentColor: #e5ebee00;
  --scrollButtonColor: #c9d1d4c2;
}
:root.theme-dark {
  --scrollLineColor: #3f484d33 !important;
  --scrollLineTransparentColor: #30343600 !important;
  --scrollButtonColor: #969a9c !important;
}
`,""]);const y=m}),"./src/modules/settings/settingsWindow.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.pp_settings_subtittle {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 12px;
  min-height: 20px;
  color: #7c7c7c;
  text-transform: uppercase;
  border-bottom: 1px solid #edeff1;
  margin-top: 1rem;
  padding: 0rem 3rem;
}
.pp_settings_property_oneLine {
  height: 2.25rem !important;
}
.pp_settings_propertyHeader {
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  justify-content: center;
}
.pp_settings_propertyHeader_tittle {
  display: flex;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 4px;
}
.pp_no_decoration {
  text-decoration: none;
}
.pp_no_decoration:visited {
  text-decoration: none;
}
.pp_no_decoration:hover {
  text-decoration: none;
}
.pp_no_decoration:active {
  text-decoration: none;
}
.pp_settings_propertyHeader_badge {
  font-size: 12px;
  margin: 0px 0px 0px 8px;
  padding: 0px 4px;
  border: 1px solid;
  border-radius: 4px;
}
.pp_settings_propertyHeader_description {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #7c7c7c;
}
.pp_settings_propertyButtonContainer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
}
`,""]);const y=m}),"./src/modules/sidebar/sidebar.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`flex-left-nav-container #pp-settings {
  position: absolute;
  top: 60px;
  z-index: calc(var(--flex-nav-z-index) + 1);
  inset-inline-end: -16px;
}
.pp_sidebar_loadingSection {
  max-height: 0px !important;
  visibility: hidden !important;
}
.pp_sidebar_loadingSection > details {
  max-height: 0px !important;
}
.pp_sidebar_collapsedSection {
  max-height: 43px !important;
  overflow-y: hidden !important;
}
`,""]);const y=m}),"./src/modules/sidebar/sidebarSettingsWindow.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.pp_sidebarSettings_sectionTittle {
  width: 100%;
  display: flex;
  align-items: center;
}
.pp_sidebarSettings_section {
  padding: 0rem 3rem;
  gap: 8px;
  align-items: center;
}
.pp_sidebarSettings_section > span {
  text-wrap-mode: nowrap;
  margin-left: 3rem;
}
`,""]);const y=m}),"./src/modules/subs/flairBar.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.pp_flair {
  border-radius: 20px;
}
.pp_flairBar {
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
.pp_flairBar_highlights {
  padding-bottom: 10px;
}
.pp_flairBar_list {
  margin-top: 5px !important;
  flex-wrap: nowrap !important;
  position: relative;
}
.pp_flairBar_listSmoothed {
  transition: left 0.1s ease-out;
}
.pp_flairBar_bordersContainer {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.pp_flairBar_preBorder {
  width: 20px;
}
.pp_flairBar_border {
  z-index: 1;
  position: absolute;
  height: 40px;
  width: 20px;
  margin-top: 5px;
  background: linear-gradient(var(--flair-border-orientation), var(--color-neutral-background), 60%, var(--color-neutral-background-transparent));
}
.pp_flairBar_border_left {
  --flair-border-orientation: 90deg;
}
.pp_flairBar_border_right {
  --flair-border-orientation: 270deg;
}
:root {
  --color-neutral-background-transparent: #fff0;
}
:root.theme-dark {
  --color-neutral-background-transparent: #0b141600 !important;
}
`,""]);const y=m}),"./src/modules/subs/flairWindow.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.pp_flairWindow_flair {
  padding: 0rem 3rem;
  gap: 8px;
  align-items: center;
}
.pp_flairWindow_flair > span {
  text-wrap-mode: nowrap;
  margin-left: 3rem;
}
.pp_flairWindow_flairContainer {
  width: 100%;
  display: flex;
  align-items: center;
}
.pp_flairWindow_columnTittle {
  margin: 20px 57px 10px 40px;
}
`,""]);const y=m}),"./src/modules/subs/subs.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.masthead > section > div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.masthead > section > div > div:last-child {
  align-self: flex-end;
}
.pp_mastheadSection {
  top: -3rem;
}
.pp_mastheadSection > div {
  gap: 1rem;
}
`,""]);const y=m}),"./src/modules/wideMode.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`@media (min-width: 1392px) {
  .pp_pageContainer {
    margin-right: 300px;
    --flex-nav-width: 272px !important;
  }
  .pp_mainFeed {
    width: var(--pp-content-width) !important;
    position: relative;
    left: var(--pp-content-offset);
  }
  .pp_mainFeed > div > main {
    max-width: var(--pp-content-width) !important;
  }
  .pp_rightSidebar {
    grid-column-start: 3;
    order: 10;
  }
  #right-sidebar-container {
    position: fixed;
    right: 0px;
    margin: 15px 10px 0px 0px;
  }
  .pp_rightSidebar_contextLookup {
    grid-column-start: 3;
    order: 10;
    position: fixed;
    right: 0px;
    margin: 15px 10px 0px 0px;
  }
}
`,""]);const y=m}),"./src/utils/UI/input.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.pp_ui_input_container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.pp_ui_input_button {
  border-color: var(--color-neutral-border-weak);
  color: var(--color-secondary-weak);
  font-weight: 400;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  color: var(--color-secondary-plain);
}
.pp_ui_input_button:hover {
  background: var(--color-input-secondary-hover) !important;
}
.pp_ui_input_button:focus {
  border-color: var(--color-neutral-content-weak) !important;
}
.pp_ui_input_panel {
  width: 100%;
  margin: 0px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
}
.pp_ui_input_icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pp_ui_input_span {
  width: 100%;
}
.pp_ui_input {
  width: 100%;
  background: 0 0;
  border: none;
  outline: 0;
  text-overflow: ellipsis;
  color: var(--color-neutral-content-strong);
  font: inherit;
  padding: 0px;
  margin: 0px;
}
.pp_ui_input_clearContainer {
  position: relative;
  width: 0px;
}
.pp_ui_input_clearButton {
  position: relative;
  right: 40px;
  top: 4px;
  border-radius: 32px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
`,""]);const y=m}),"./src/utils/UI/options.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.pp_ui_options {
  width: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.pp_ui_options_container {
  position: relative;
  display: flex;
  justify-content: center;
}
.pp_ui_options_container > span {
  width: max-content;
  text-align: center;
}
.pp_ui_options_dots {
  position: absolute;
  top: 10px;
  font-size: 20px;
  pointer-events: none;
}
.pp_ui_options_arrow {
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
}
.pp_ui_options_inversed {
  transform: scale(-1, 1);
}
`,""]);const y=m}),"./src/utils/UI/toggle.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.pp_ui_toggle {
  float: right;
  position: relative;
}
.pp_ui_toggle_active {
  justify-content: flex-end !important;
  background-color: #0079d3 !important;
}
.pp_ui_toggle_button {
  position: relative;
  cursor: pointer;
  user-select: none;
  overflow: visible;
  display: flex;
  justify-content: start;
  background: transparent;
  background-color: var(--checkBox-background);
  padding: initial;
  height: 24px;
  width: 37.5px;
  border-radius: 100px;
  border: 2px solid transparent;
  transition: background-color 0.2s linear;
}
.pp_ui_toggle_knob {
  height: 19.5px;
  width: 19.5px;
  background-color: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 3px 0 rgba(0, 0, 0, 0.2);
  transition: 0.5s linear;
  border-radius: 57%;
}
:root {
  --checkBox-background: #1a1a1b1a;
}
:root.theme-dark {
  --checkBox-background: #81818152 !important;
}
`,""]);const y=m}),"./src/utils/changesObserver.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.pp_changesBannerContainer {
  position: absolute;
  top: 0px;
  width: 900px;
  overflow-y: hidden;
  opacity: 0;
  transition: opacity 0.15s ease-in-out;
}
.pp_changesBanner {
  display: flex;
  justify-content: center;
  margin: 2rem 15%;
  padding: 1rem;
  border-radius: 15px;
  background-color: #ffd40017;
  border: solid 1px #ffd400;
  color: #d7b300;
  font-weight: 500;
}
.pp_changesBanner_active {
  opacity: 1 !important;
}
`,""]);const y=m}),"./src/utils/imageViewer.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.pp_imageViewable {
  cursor: pointer;
}
.pp_imageViewer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 10;
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-color: #000000b3;
}
.pp_imageViewer_closeButton {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50px;
  z-index: 11;
  right: 50px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  color: #ffffff9c;
  background-color: #00000069;
  border-radius: 30px;
}
.pp_imageViewer_closeButton:hover {
  color: #ffffffc7;
}
.pp_imageViewer_imageContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 90%;
}
.pp_imageViewer_imageContainer:not(.pp_imageViewer_drag) {
  transition: transform 0.5s;
}
.pp_imageViewer_image {
  cursor: grab;
  object-fit: scale-down;
  max-width: 100%;
  max-height: 100%;
  box-shadow: 0px 0px 20px 3px #14141485;
}
.pp_imageViewer_image:active {
  cursor: grabbing;
}
`,""]);const y=m}),"./src/utils/window.less":((l,v,i)=>{"use strict";i.d(v,{A:()=>y});var E=i("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=i.n(E),b=i("./node_modules/css-loader/dist/runtime/api.js"),x=i.n(b),m=x()(w());m.push([l.id,`.pp_window_container {
  cursor: pointer;
  position: fixed;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000b3;
}
.pp_window {
  cursor: auto;
  display: flex;
  flex-direction: column;
  width: 900px;
  height: fit-content;
  min-height: 200px;
  max-height: 75%;
  border-radius: 15px;
  background-color: var(--color-neutral-background);
  box-shadow: 0px 0px 50px 0px #00000070;
}
.pp_window_tittleContainer {
  height: 48px;
  margin: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.pp_window_tittle {
  margin-left: 1rem;
}
.pp_window_closeButton {
  margin: 1rem;
}
.pp_window_content {
  display: flex;
  flex-direction: column;
  overflow-y: overlay;
}
.pp_window_footer {
  height: 2rem;
  min-height: 2rem;
}
.pp_window_elementsContainer {
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 20px 40px;
  gap: 0.5rem;
}
.pp_window_element {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 3rem;
}
.pp_window_elementsContainer > .pp_window_element:hover {
  background-color: var(--color-neutral-background-hover);
  border-radius: 15px;
}
.pp_window_controlArea {
  width: 200px;
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pp_window_scrollContent {
  overflow-y: scroll;
}
`,""]);const y=m}),"./node_modules/css-loader/dist/runtime/api.js":(l=>{"use strict";l.exports=function(v){var i=[];return i.toString=function(){return this.map(function(w){var b="",x=typeof w[5]<"u";return w[4]&&(b+="@supports (".concat(w[4],") {")),w[2]&&(b+="@media ".concat(w[2]," {")),x&&(b+="@layer".concat(w[5].length>0?" ".concat(w[5]):""," {")),b+=v(w),x&&(b+="}"),w[2]&&(b+="}"),w[4]&&(b+="}"),b}).join("")},i.i=function(w,b,x,m,y){typeof w=="string"&&(w=[[null,w,void 0]]);var re={};if(x)for(var F=0;F<this.length;F++){var Pe=this[F][0];Pe!=null&&(re[Pe]=!0)}for(var A=0;A<w.length;A++){var U=[].concat(w[A]);x&&re[U[0]]||(typeof y<"u"&&(typeof U[5]>"u"||(U[1]="@layer".concat(U[5].length>0?" ".concat(U[5]):""," {").concat(U[1],"}")),U[5]=y),b&&(U[2]&&(U[1]="@media ".concat(U[2]," {").concat(U[1],"}")),U[2]=b),m&&(U[4]?(U[1]="@supports (".concat(U[4],") {").concat(U[1],"}"),U[4]=m):U[4]="".concat(m)),i.push(U))}},i}}),"./node_modules/css-loader/dist/runtime/noSourceMaps.js":(l=>{"use strict";l.exports=function(v){return v[1]}}),"./resources/bookmarkSaved.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15.372 1H4.628A1.629 1.629 0 0 0 3 2.628v16.256a1.113 1.113 0 0 0 1.709.941L10 16.479l5.282 3.34A1.12 1.12 0 0 0 17 18.873V2.628A1.63 1.63 0 0 0 15.372 1Z" style="fill:currentColor;stroke:none;stroke-width:0px"></path></svg>'}),"./resources/bookmarkUnsaved.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.114 20A1.117 1.117 0 0 1 3 18.884V2.628A1.629 1.629 0 0 1 4.628 1h10.744A1.63 1.63 0 0 1 17 2.628v16.245a1.12 1.12 0 0 1-1.718.946L10 16.479l-5.291 3.346a1.11 1.11 0 0 1-.595.175Zm.514-17.75a.378.378 0 0 0-.378.378v16.009L10 15l5.75 3.636V2.628a.378.378 0 0 0-.378-.378H4.628Z" style="fill:currentColor;stroke:none;stroke-width:0px"></path></svg>'}),"./resources/comments/bannedUser.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M2,7.15,7.08,1.84A2.66,2.66,0,0,1,10,2.3a2.72,2.72,0,0,1,.7,2.91L5.37,10.66s-1,1.11-2.74-.73C1,8.24,2,7.15,2,7.15Z" style="fill: none;stroke: #8a3685;stroke-width: 1.5px"></path><path d="M7.33,8.85l6,6.16a1,1,0,0,0,1.28-.07,1.16,1.16,0,0,0,.15-1.28L8.9,7.37" style="fill: #8a3685; stroke:none"></path></svg>'}),"./resources/comments/newUser.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 20 20"><path d="M1.46,1.5S3.49,4.89,7,5.07c1.49.07,3.35.25,4.06.79,1.41,1.09,2.3,2.08,1.74,4.37a4.91,4.91,0,0,1-4.36,3.49C5.08,14,2.89,10.29,2.33,9.35.41,6.12,1.46,1.5,1.46,1.5Z" style="fill:#69b508;stroke:none;stroke-width:0px"></path><path d="M12.5,11.5a3.39,3.39,0,0,1,2,2,3.16,3.16,0,0,1,0,2" style="fill:none;stroke:#69b508;stroke-width:2px"></path></svg>'}),"./resources/comments/shareButton.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.111 12.5a3.701 3.701 0 0 1-1.09 2.41c-.479.47-.928.922-1.378 1.373-.45.45-.894.9-1.368 1.366a3.852 3.852 0 0 1-2.698 1.099 3.852 3.852 0 0 1-2.698-1.099 3.738 3.738 0 0 1-1.116-2.659c0-.997.402-1.953 1.116-2.658.479-.472.928-.923 1.378-1.375.45-.45.893-.9 1.368-1.365A3.936 3.936 0 0 1 9.638 8.59a3.968 3.968 0 0 1 2.24.258c.27-.269.546-.54.812-.806l.131-.13a5.086 5.086 0 0 0-3.182-.624A5.052 5.052 0 0 0 6.732 8.71c-.48.471-.929.922-1.377 1.373-.449.451-.894.9-1.37 1.366A4.982 4.982 0 0 0 2.5 14.992c0 1.328.534 2.602 1.486 3.543A5.13 5.13 0 0 0 7.58 20a5.13 5.13 0 0 0 3.595-1.465c.478-.471.927-.923 1.377-1.374.451-.451.894-.9 1.368-1.366a4.993 4.993 0 0 0 1.263-2.071c.243-.781.288-1.61.132-2.412L14.11 12.5Z" style="fill:currentColor;stroke:none;stroke-width:1px"></path><path d="M16.017 1.467A5.123 5.123 0 0 0 12.422 0a5.123 5.123 0 0 0-3.595 1.467c-.478.471-.926.923-1.377 1.374-.45.451-.894.9-1.367 1.366a4.966 4.966 0 0 0-1.106 1.624 4.907 4.907 0 0 0-.291 2.86l1.2-1.19a3.699 3.699 0 0 1 1.092-2.41c.478-.472.928-.923 1.377-1.374.45-.45.894-.9 1.368-1.366a3.844 3.844 0 0 1 2.698-1.101c1.012 0 1.982.396 2.698 1.101a3.736 3.736 0 0 1 1.116 2.66c0 .996-.401 1.953-1.116 2.658-.478.471-.927.922-1.377 1.373-.45.451-.893.9-1.368 1.367a3.933 3.933 0 0 1-2.014 1.003 3.966 3.966 0 0 1-2.24-.26c-.273.274-.551.549-.818.818l-.123.12a5.087 5.087 0 0 0 3.183.624 5.053 5.053 0 0 0 2.906-1.423c.477-.472.926-.923 1.376-1.375.45-.452.894-.9 1.368-1.365A4.977 4.977 0 0 0 17.5 5.008a4.977 4.977 0 0 0-1.488-3.543l.005.002Z" style="fill:currentColor;stroke:none;stroke-width:1px"></path></svg>'}),"./resources/comments/sortButtons/controversial.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><polygon points="6.34 13.21 3.33 9.37 2.46 10.07 5.35 13.73 6.34 13.21" style="fill:currentColor;stroke:none;stroke-miterlimit:10"></polygon><polygon points="4.11 13.02 3.11 11.75 0.76 13.47 1.7 14.55 4.11 13.02" style="fill:currentColor;stroke:none;stroke-miterlimit:10"></polygon><path d="M5.67,9.62l-.8.66,1,1.32s.54-.31,1.31-.8A12,12,0,0,1,5.67,9.62Z" style="fill:currentColor;stroke:none;stroke-miterlimit:10"></path><path d="M10.93,3.83A19.94,19.94,0,0,1,8.52,7.08c.57.52,1.29,1.08,1.8,1.46a11.2,11.2,0,0,0,1-1C14.21,4.3,14.7,2.11,14.7,2.11Z" style="fill:currentColor;stroke:none;stroke-miterlimit:10"></path><polygon points="9.23 13.59 12.52 9.01 13.53 9.81 10.36 14.19 9.23 13.59" style="fill:currentColor;stroke:none;stroke-miterlimit:10"></polygon><polygon points="11.61 12.82 12.66 11.36 15.26 13.26 14.28 14.52 11.61 12.82" style="fill:currentColor;stroke:none;stroke-miterlimit:10"></polygon><path d="M11.09,9.83A43.49,43.49,0,0,1,7.38,6.71,20.23,20.23,0,0,1,4.52,2.83,37,37,0,0,0,.73,1.33S.79,3.41,4.11,7.09A23.67,23.67,0,0,0,9.88,11.4C10.28,10.87,10.69,10.34,11.09,9.83Z" style="fill:currentColor"></path><path d="M11.09,9.83A43.49,43.49,0,0,1,7.38,6.71,20.23,20.23,0,0,1,4.52,2.83,37,37,0,0,0,.73,1.33S.79,3.41,4.11,7.09A23.67,23.67,0,0,0,9.88,11.4C10.28,10.87,10.69,10.34,11.09,9.83Z" style="fill:none;stroke:none;stroke-miterlimit:10"></path></svg>'}),"./resources/comments/sortButtons/old.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="5.28" cy="8.67" r="1" style="fill: currentColor"></circle><circle cx="9.28" cy="8.67" r="1" style="fill: currentColor"></circle><circle cx="12.26" cy="2.08" r="1.32" style="fill: currentColor"></circle><path d="M7.55,5.08c.09-2.83,3-3.59,4-3" style="fill: none;stroke: currentColor;stroke-miterlimit: 10"></path><path d="M4.92,11.7s3,1,5,0" style="fill: blue;stroke: currentColor;stroke-miterlimit: 10"></path><path d="M7.72,5c3.31,0,6,2,6,4.5S11,14,7.72,14s-6-2-6-4.5S4.41,5,7.72,5m0-.5c-3.59,0-6.5,2.24-6.5,5s2.91,5,6.5,5,6.5-2.24,6.5-5-2.91-5-6.5-5Z" style="fill: currentColor"></path><path d="M10.85,5.5A1.56,1.56,0,0,1,13,5.31a1.34,1.34,0,0,1,.24,1.89" style="fill: none;stroke: currentColor;stroke-miterlimit: 10;stroke-width: 0.5px"></path><path d="M2.18,7a1.55,1.55,0,0,1,.53-2,1.33,1.33,0,0,1,1.86.4" style="fill: none;stroke: currentColor;stroke-miterlimit: 10;stroke-width: 0.5px"></path></svg>'}),"./resources/comments/sortButtons/qa.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="10.77" cy="4.4" r="3" style="fill: currentColor"></circle><path d="M3.54,13.87l0,0a1.07,1.07,0,0,1-.46-1.35L6.4,7.44a1.05,1.05,0,0,1,1.48,0l.58.43c.54.41.74,1,.43,1.42L5,13.93A1.08,1.08,0,0,1,3.54,13.87Z" style="fill: currentColor"></path></svg>'}),"./resources/comments/userTags/blockedButton.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m9.78126,18.09375c-4.41989,0 -8,-3.58011 -8,-8c0,-4.41989 3.58011,-8 8,-8c4.41989,0 8,3.58011 8,8c0,4.41989 -3.58011,8 -8,8z" style="fill:none;stroke:currentColor;stroke-width:2px"></path><path d="m4.43767,4.59392l10.81217,10.93716" style="fill:none;stroke:currentColor;stroke-width:2px"></path></svg>'}),"./resources/comments/userTags/blockedIcon.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 20 20"><path d="M3.11,3l7.94,8" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path><path d="M7,12.88A5.88,5.88,0,1,1,12.91,7,5.88,5.88,0,0,1,7,12.88Z" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path></svg>'}),"./resources/comments/userTags/followedButton.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m1.56177,7.99265l5.62517,-1.11153l2.68713,-4.92101l3.02542,4.77603l5.28687,1.25651l-4.60571,3.96991l1.43072,5.79091l-5.28229,-2.56852l-4.99233,2.56852l1.09243,-6.03254l-4.26742,-3.72827l0,-0.00001z" style="fill:none;stroke:currentColor;stroke-width:2px"></path></svg>'}),"./resources/comments/userTags/followedIcon.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 20 20"><path d="m0.43678,5.49532l4.46205,-0.8817l2.13151,-3.90349l2.39985,3.78849l4.1937,0.9967l-3.65339,3.14905l1.13489,4.59352l-4.19007,-2.03743l-3.96007,2.03743l0.86655,-4.78519l-3.38505,-2.95738l0,-0.00001l0.00001,0z" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path></svg>'}),"./resources/comments/userTags/likedButton.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m7.28935,15.93702c-4.80908,-3.55432 -6.52852,-5.80272 -6.54246,-8.55516c-0.0127,-2.50919 2.10985,-4.93093 4.30951,-4.91697c1.09841,0.00698 3.45457,0.93051 4.2889,1.6811c0.42039,0.37819 0.6195,0.3409 1.55543,-0.29133c2.54723,-1.72064 5.03461,-1.75676 6.64556,-0.09648c2.57463,2.65349 2.10589,5.82222 -1.34747,9.10906c-1.836,1.74747 -5.84543,4.84759 -6.26946,4.84759c-0.12903,0 -1.31703,-0.80001 -2.64001,-1.7778l0,0l0,-0.00001z" style="fill:none;stroke:currentColor;stroke-width:2px"></path></svg>'}),"./resources/comments/userTags/likedIcon.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 20 20"><path d="m5.10986,11.44595c-3.39081,-2.55084 -4.60316,-4.16445 -4.61299,-6.1398c-0.00896,-1.80077 1.48763,-3.53879 3.03857,-3.52877c0.77447,0.00501 2.43577,0.6678 3.02404,1.20648c0.29641,0.27142 0.4368,0.24465 1.09671,-0.20908c1.79601,-1.23486 3.54983,-1.26078 4.68568,-0.06924c1.81534,1.90433 1.48483,4.17844 -0.95008,6.53732c-1.29454,1.25411 -4.12153,3.47898 -4.4205,3.47898c-0.09098,0 -0.92862,-0.57415 -1.86143,-1.27588l0,0l0,-0.00001z" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path></svg>'}),"./resources/comments/userTags/warningButton.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m1.24313,16.49297l8.78125,-13.75l8.78125,13.75l-17.5625,0z" style="fill:none;stroke:currentColor;stroke-width:2px"></path><path d="m9.875,7.5l0,4.5" style="fill:none;stroke:currentColor;stroke-width:2px"></path><path d="m9.875,14.09375l0,1" style="fill:none;stroke:currentColor;stroke-width:2px"></path></svg>'}),"./resources/comments/userTags/warningIcon.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 20 20"><path d="m6.91754,10.29973l0,0.7153" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path><path d="m6.91754,5.38201l0,4.06927" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path><path d="m0.74313,12.0159l6.28126,-9.83543l6.28126,9.83543l-12.56252,0z" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path></svg>'}),"./resources/contentFilter.svg":(l=>{l.exports='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4.6C3 4.03995 3 3.75992 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.75992 3 4.03995 3 4.6 3H19.4C19.9601 3 20.2401 3 20.454 3.10899C20.6422 3.20487 20.7951 3.35785 20.891 3.54601C21 3.75992 21 4.03995 21 4.6V6.33726C21 6.58185 21 6.70414 20.9724 6.81923C20.9479 6.92127 20.9075 7.01881 20.8526 7.10828C20.7908 7.2092 20.7043 7.29568 20.5314 7.46863L14.4686 13.5314C14.2957 13.7043 14.2092 13.7908 14.1474 13.8917C14.0925 13.9812 14.0521 14.0787 14.0276 14.1808C14 14.2959 14 14.4182 14 14.6627V17L10 21V14.6627C10 14.4182 10 14.2959 9.97237 14.1808C9.94787 14.0787 9.90747 13.9812 9.85264 13.8917C9.7908 13.7908 9.70432 13.7043 9.53137 13.5314L3.46863 7.46863C3.29568 7.29568 3.2092 7.2092 3.14736 7.10828C3.09253 7.01881 3.05213 6.92127 3.02763 6.81923C3 6.70414 3 6.58185 3 6.33726V4.6Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>'}),"./resources/deleteButton.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z"></path></svg>'}),"./resources/dragAnchor.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 13"><rect y="5.5" width="14" height="2" rx="1"></rect><rect width="14" height="2" rx="1"></rect><rect y="11" width="14" height="2" rx="1"></rect></svg>'}),"./resources/feedButtons/feedButtonBest.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8.82,1.51l1.43,3.4a.86.86,0,0,0,.66.47l3.62.28A.91.91,0,0,1,15,7.22L12.3,9.62a.84.84,0,0,0-.25.76l.81,3.55a.92.92,0,0,1-1.33,1L8.41,13a.91.91,0,0,0-.82,0L4.47,14.89a.92.92,0,0,1-1.33-1L4,10.38a.84.84,0,0,0-.25-.76L1,7.22a.91.91,0,0,1,.5-1.56l3.62-.28a.86.86,0,0,0,.66-.47l1.43-3.4A.91.91,0,0,1,8.82,1.51Z" style="fill:currentColor; stroke:none"></path></svg>'}),"./resources/feedButtons/feedButtonHot.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8.49,2.93c.7,1.56,3,2.81,3.69,3.52a5.14,5.14,0,0,1,1.36,5.45c-1.09,3.37-4.49,3.38-6.21,3.38s-4.18-.28-5-3,.8-4.41,1-5,1.06,2.52,2,3.12c1.19.79,2.85,0,2.85-1.18S6.72,7.65,6.44,5.37a10.62,10.62,0,0,1,1-4.9S7.83,1.46,8.49,2.93Z" style="stroke:currentColor;fill:currentColor;stroke-width:0.5px"></path></svg>'}),"./resources/feedButtons/feedButtonNew.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8,15.5A7.5,7.5,0,1,1,15.5,8,7.5,7.5,0,0,1,8,15.5Zm0-14A6.5,6.5,0,1,0,14.5,8,6.51,6.51,0,0,0,8,1.5Z" style="fill:currentColor;stroke:currentColor;stroke-width:0.5px"></path><path d="M8,2V8l4-2" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path></svg>'}),"./resources/feedButtons/feedButtonRising.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M1.1,14.67c1.4-2.8,3.62-6.84,3.62-6.84L9,12.18l4.13-9.94" style="fill:none;stroke:currentColor;stroke-width:2px"></path><path d="M8.5,4.5l4.68-2.45S14,5.31,14.5,7.5" style="fill:none;stroke:currentColor;stroke-width:2px"></path></svg>'}),"./resources/feedButtons/feedButtonTop.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14.51,6.56,9.13,1.17a1.61,1.61,0,0,0-2.26,0L1.49,6.56a1,1,0,0,0,.72,1.73H5.52V14A1.28,1.28,0,0,0,6.8,15.3H9.23A1.29,1.29,0,0,0,10.52,14V8.29h3.27A1,1,0,0,0,14.51,6.56Z" style="fill:none;stroke:currentColor;stroke-width:1.5px"></path></svg>'}),"./resources/hiddenIco.svg":(l=>{l.exports='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Edit / Hide"><path id="Vector" d="M3.99989 4L19.9999 20M16.4999 16.7559C15.1473 17.4845 13.6185 17.9999 11.9999 17.9999C8.46924 17.9999 5.36624 15.5478 3.5868 13.7788C3.1171 13.3119 2.88229 13.0784 2.7328 12.6201C2.62619 12.2933 2.62616 11.7066 2.7328 11.3797C2.88233 10.9215 3.11763 10.6875 3.58827 10.2197C4.48515 9.32821 5.71801 8.26359 7.17219 7.42676M19.4999 14.6335C19.8329 14.3405 20.138 14.0523 20.4117 13.7803L20.4146 13.7772C20.8832 13.3114 21.1182 13.0779 21.2674 12.6206C21.374 12.2938 21.3738 11.7068 21.2672 11.38C21.1178 10.9219 20.8827 10.6877 20.4133 10.2211C18.6338 8.45208 15.5305 6 11.9999 6C11.6624 6 11.3288 6.02241 10.9999 6.06448M13.3228 13.5C12.9702 13.8112 12.5071 14 11.9999 14C10.8953 14 9.99989 13.1046 9.99989 12C9.99989 11.4605 10.2135 10.9711 10.5608 10.6113" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>'}),"./resources/imageCloseButton.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="m33.16001,9.52439l-2.37671,-2.37671l-10.691,10.691l-10.691,-10.691l-2.37671,2.37671l10.691,10.691l-10.691,10.691l2.37671,2.37671l10.691,-10.691l10.691,10.691l2.37671,-2.37671l-10.691,-10.691l10.691,-10.691z" style="fill:currentColor;stroke:none;stroke-width:0px"></path></svg>'}),"./resources/inputClear.svg":(l=>{l.exports='<svg fill="currentColor" icon-name="clear-outline" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 18.75A8.75 8.75 0 1 1 18.75 10 8.76 8.76 0 0 1 10 18.75Zm3.567-11.433L10.884 10l2.683 2.683-.884.884L10 10.884l-2.683 2.683-.884-.884L9.116 10 6.433 7.317l.884-.884L10 9.116l2.683-2.683.884.884Z" style="fill:currentColor;stroke:none;stroke-width:0px"></path></svg>'}),"./resources/postUnwrapButton.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M12.5,18.75A2.36,2.36,0,0,1,10.83,18L2.47,9.53,3.53,8.47,11.9,17a.79.79,0,0,0,1.2,0l8.37-8.5,1.06,1.06L14.17,18A2.36,2.36,0,0,1,12.5,18.75Z" style="fill:currentColor;stroke:none;stroke-miterlimit:10;stroke-width:0px"></path></svg>'}),"./resources/scrollButton.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M27.58,27.12,21,20.53a1.42,1.42,0,0,0-2,0l-6.58,6.59a1.41,1.41,0,0,0,1,2.41H26.58A1.41,1.41,0,0,0,27.58,27.12Z" style="fill:currentColor"></path><rect x="5" y="11.75" width="30" height="2.5" style="fill:currentColor"></rect></svg>'}),"./resources/settingsArrow.svg":(l=>{l.exports='<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.942 15.442-.884-.884L11.616 10 7.058 5.442l.884-.884 5 5a.624.624 0 0 1 0 .884l-5 5Z" style="fill:currentColor;stroke:none;stroke-width:0px"></path></svg>'}),"./resources/settingsButton.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15.07,2.25a.33.33,0,0,1,.33.33V6.72h1.25a2.11,2.11,0,0,1,0,4.21H15.4v4.14a.33.33,0,0,1-.33.33H10.93v1.25a2.11,2.11,0,0,1-4.21,0V15.4H2.58a.33.33,0,0,1-.33-.33v-3A3.51,3.51,0,0,0,4.49,8.82,3.48,3.48,0,0,0,2.25,5.57v-3a.33.33,0,0,1,.33-.33H5.34a3.49,3.49,0,0,0,7,0h2.76m0-1.25H10.75A2.24,2.24,0,1,1,6.9,1H2.58A1.58,1.58,0,0,0,1,2.58v4a2.24,2.24,0,1,1,0,4.47v4a1.58,1.58,0,0,0,1.58,1.58H5.47a3.36,3.36,0,0,0,6.71,0h2.89a1.58,1.58,0,0,0,1.58-1.58V12.18a3.36,3.36,0,0,0,0-6.71V2.58A1.58,1.58,0,0,0,15.07,1Z"></path></svg>'}),"./resources/settingsGear.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M 24 4 C 22.423103 4 20.902664 4.1994284 19.451172 4.5371094 A 1.50015 1.50015 0 0 0 18.300781 5.8359375 L 17.982422 8.7382812 C 17.878304 9.6893592 17.328913 10.530853 16.5 11.009766 C 15.672739 11.487724 14.66862 11.540667 13.792969 11.15625 L 13.791016 11.15625 L 11.125 9.9824219 A 1.50015 1.50015 0 0 0 9.4257812 10.330078 C 7.3532865 12.539588 5.7626807 15.215064 4.859375 18.201172 A 1.50015 1.50015 0 0 0 5.4082031 19.845703 L 7.7734375 21.580078 C 8.5457929 22.147918 9 23.042801 9 24 C 9 24.95771 8.5458041 25.853342 7.7734375 26.419922 L 5.4082031 28.152344 A 1.50015 1.50015 0 0 0 4.859375 29.796875 C 5.7625845 32.782665 7.3519262 35.460112 9.4257812 37.669922 A 1.50015 1.50015 0 0 0 11.125 38.015625 L 13.791016 36.841797 C 14.667094 36.456509 15.672169 36.511947 16.5 36.990234 C 17.328913 37.469147 17.878304 38.310641 17.982422 39.261719 L 18.300781 42.164062 A 1.50015 1.50015 0 0 0 19.449219 43.460938 C 20.901371 43.799844 22.423103 44 24 44 C 25.576897 44 27.097336 43.800572 28.548828 43.462891 A 1.50015 1.50015 0 0 0 29.699219 42.164062 L 30.017578 39.261719 C 30.121696 38.310641 30.671087 37.469147 31.5 36.990234 C 32.327261 36.512276 33.33138 36.45738 34.207031 36.841797 L 36.875 38.015625 A 1.50015 1.50015 0 0 0 38.574219 37.669922 C 40.646713 35.460412 42.237319 32.782983 43.140625 29.796875 A 1.50015 1.50015 0 0 0 42.591797 28.152344 L 40.226562 26.419922 C 39.454197 25.853342 39 24.95771 39 24 C 39 23.04229 39.454197 22.146658 40.226562 21.580078 L 42.591797 19.847656 A 1.50015 1.50015 0 0 0 43.140625 18.203125 C 42.237319 15.217017 40.646713 12.539588 38.574219 10.330078 A 1.50015 1.50015 0 0 0 36.875 9.984375 L 34.207031 11.158203 C 33.33138 11.54262 32.327261 11.487724 31.5 11.009766 C 30.671087 10.530853 30.121696 9.6893592 30.017578 8.7382812 L 29.699219 5.8359375 A 1.50015 1.50015 0 0 0 28.550781 4.5390625 C 27.098629 4.2001555 25.576897 4 24 4 z M 24 7 C 24.974302 7 25.90992 7.1748796 26.847656 7.3398438 L 27.035156 9.0644531 C 27.243038 10.963375 28.346913 12.652335 30 13.607422 C 31.654169 14.563134 33.668094 14.673009 35.416016 13.904297 L 37.001953 13.207031 C 38.219788 14.669402 39.183985 16.321182 39.857422 18.130859 L 38.451172 19.162109 C 36.911538 20.291529 36 22.08971 36 24 C 36 25.91029 36.911538 27.708471 38.451172 28.837891 L 39.857422 29.869141 C 39.183985 31.678818 38.219788 33.330598 37.001953 34.792969 L 35.416016 34.095703 C 33.668094 33.326991 31.654169 33.436866 30 34.392578 C 28.346913 35.347665 27.243038 37.036625 27.035156 38.935547 L 26.847656 40.660156 C 25.910002 40.82466 24.973817 41 24 41 C 23.025698 41 22.09008 40.82512 21.152344 40.660156 L 20.964844 38.935547 C 20.756962 37.036625 19.653087 35.347665 18 34.392578 C 16.345831 33.436866 14.331906 33.326991 12.583984 34.095703 L 10.998047 34.792969 C 9.7799772 33.330806 8.8159425 31.678964 8.1425781 29.869141 L 9.5488281 28.837891 C 11.088462 27.708471 12 25.91029 12 24 C 12 22.08971 11.087719 20.290363 9.5488281 19.160156 L 8.1425781 18.128906 C 8.8163325 16.318532 9.7814501 14.667839 11 13.205078 L 12.583984 13.902344 C 14.331906 14.671056 16.345831 14.563134 18 13.607422 C 19.653087 12.652335 20.756962 10.963375 20.964844 9.0644531 L 21.152344 7.3398438 C 22.089998 7.1753403 23.026183 7 24 7 z M 24 16 C 19.599487 16 16 19.59949 16 24 C 16 28.40051 19.599487 32 24 32 C 28.400513 32 32 28.40051 32 24 C 32 19.59949 28.400513 16 24 16 z M 24 19 C 26.779194 19 29 21.220808 29 24 C 29 26.779192 26.779194 29 24 29 C 21.220806 29 19 26.779192 19 24 C 19 21.220808 21.220806 19 24 19 z"></path></svg>'}),"./resources/showIco.svg":(l=>{l.exports='<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#231f20;}</style></defs><g id="show"><path class="cls-1" d="M4,17a1,1,0,0,1-.87-1.5C3.31,15.2,7.52,8,16,8s12.69,7.2,12.87,7.5a1,1,0,1,1-1.74,1C27.1,16.43,23.3,10,16,10S4.91,16.43,4.87,16.5A1,1,0,0,1,4,17Z"></path><path class="cls-1" d="M16,24C7.52,24,3.31,16.8,3.13,16.5a1,1,0,0,1,1.74-1C4.9,15.57,8.7,22,16,22s11.09-6.43,11.13-6.5a1,1,0,0,1,1.74,1C28.69,16.8,24.48,24,16,24Z"></path><path class="cls-1" d="M16,18a2,2,0,1,1,2-2A2,2,0,0,1,16,18Zm0-2h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Zm0,0h0Z"></path></g></svg>'}),"./resources/sidebarSubsManager.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M360-200v-80h480v80zm0-240v-80h480v80zm0-240v-80h480v80zM200-160q-33 0-56.5-23.5T120-240t23.5-56.5T200-320t56.5 23.5T280-240t-23.5 56.5T200-160m0-240q-33 0-56.5-23.5T120-480t23.5-56.5T200-560t56.5 23.5T280-480t-23.5 56.5T200-400m0-240q-33 0-56.5-23.5T120-720t23.5-56.5T200-800t56.5 23.5T280-720t-23.5 56.5T200-640"></path></svg>'}),"./resources/subFilter.svg":(l=>{l.exports='<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 18.616 14.985 14.1a8.528 8.528 0 1 0-.884.884l4.515 4.515.884-.884ZM1.301 8.553a7.253 7.253 0 1 1 7.252 7.253 7.261 7.261 0 0 1-7.252-7.253Z" style="stroke:none;stroke-width:0px"></path></svg>'}),"./resources/windowCloseButton.svg":(l=>{l.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14,2h0a.75.75,0,0,0-1.06,0L8.15,6.78a.2.2,0,0,1-.3,0L3.06,2A.75.75,0,0,0,2,2H2A.75.75,0,0,0,2,3.06L6.78,7.85a.2.2,0,0,1,0,.3L2,12.94A.75.75,0,0,0,2,14H2a.75.75,0,0,0,1.06,0L7.85,9.22a.2.2,0,0,1,.3,0L12.94,14A.75.75,0,0,0,14,14h0a.75.75,0,0,0,0-1.06L9.22,8.15a.2.2,0,0,1,0-.3L14,3.06A.75.75,0,0,0,14,2Z" style="fill:currentColor;stroke:none;stroke-miterlimit:10;stroke-width:0px"></path></svg>'})},Ft={};function _(l){var v=Ft[l];if(v!==void 0)return v.exports;var i=Ft[l]={id:l,exports:{}};return Xn[l](i,i.exports,_),i.exports}_.n=l=>{var v=l&&l.__esModule?()=>l.default:()=>l;return _.d(v,{a:v}),v},_.d=(l,v)=>{for(var i in v)_.o(v,i)&&!_.o(l,i)&&Object.defineProperty(l,i,{enumerable:!0,get:v[i]})},_.o=(l,v)=>Object.prototype.hasOwnProperty.call(l,v);var Ii={};(()=>{"use strict";var l;(function(e){e.Disabled="Disabled",e.WhenUpvoted="When upvoted",e.Always="Always"})(l||(l={}));var v;(function(e){e.Default="Default behaviour",e.WhenUpvoted="Show when upvoted",e.RemoveCompletely="Remove completely"})(v||(v={}));var i;(function(e){e[e.Comment=0]="Comment",e[e.Post=1]="Post"})(i||(i={}));const E=2e3,w=15,b=3600,x=b*24;function m(e){return e*1e3}class y{}class re{}re.Null=function(e){return null},re.EmptyObject=function(e){return{}};class F{constructor(t,n=new y){if(this.databaseKey=t+"_DATABASE",this.refreshKey=t+"_REFRESHED",this.cleanupKey=t+"_CLEANUP",this.isCleanupable=n?.isCleanupable??!1,this.validator=n?.validator??null,this.loader=n?.loader??null,this.factory=n?.factory??re.EmptyObject,this.refresh(),this.isCleanupable&&GM_getValue(this.cleanupKey,0)<Date.now()){const o=Object.entries(this.data).length,s=Date.now()-m(x*(1e3/o));this.data=Object.fromEntries(Object.entries(this.data).filter(([r,a])=>a.timestamp>s)),this.refreshed=Date.now(),GM_setValue(this.databaseKey,this.data),GM_setValue(this.refreshKey,this.refreshed),GM_setValue(this.cleanupKey,Date.now()+1e3*b)}}refresh(){const t=GM_getValue(this.refreshKey,0);(this.data==null||this.refreshed<t)&&(this.refreshed=t,this.data=GM_getValue(this.databaseKey,{}))}get(t){this.refresh();const n=this.data[t];return n??this.factory(t)}forEach(t){this.refresh(),Object.keys(this.data).forEach(n=>{t(n,this.data[n])})}async getWithLoader(t,n=null){this.refresh();const o=this.data[t];let s=o??this.factory(t),r=!1;return this.validator(s)&&(s=await this.loader(t),this.set(t,s),r=!0),n?.(r),s}set(t,n){this.refresh(),this.isCleanupable&&(n.timestamp=Date.now()),this.data[t]=n,this.refreshed=Date.now(),GM_setValue(this.databaseKey,this.data),GM_setValue(this.refreshKey,this.refreshed)}wipe(){GM_deleteValue(this.databaseKey),GM_deleteValue(this.refreshKey),GM_deleteValue(this.cleanupKey)}}const Pe=10;async function A(e,t=0){return new Promise(n=>{let o=e();if(o!=null)return n(o);let s=t/Pe;const r=setInterval(()=>{o=e();let a=!1;if(t>0&&(s--,s<0&&(a=!0)),o!=null||a)return clearInterval(r),n(o)},Pe)})}const U=new Map;function Ie(e,t,n,o=!0){e&&U.has(e)&&(U.get(e).disconnect(),U.delete(e));const s=n(t);if(s!=null&&s==!0)return;let r=new MutationObserver(a=>{for(const c of a)for(const g of c.addedNodes)if(r&&g instanceof HTMLElement){const f=n(g);f!=null&&f==!0&&(r.disconnect(),r=null)}});r.observe(t,{childList:!0,subtree:o}),e&&U.set(e,r)}function $(e,t="pp-rendered"){return e==null||e.getAttribute(t)!=null?!0:(e.setAttribute(t,""),!1)}function $n(e){return document.cookie.split("; ").find(t=>t.startsWith(e))?.split("=")[1]}function zn(e,t){if(e==t)return!1;const n=e.split("."),o=t.split(".");for(const s of[0,1,2]){const r=parseInt(n[s]),a=parseInt(o[s]);if(r!=a)return r<a}return!1}function Kt(e,t,n=10){let o=t*1e3/n,s=setInterval(()=>{e(),o--,o<0&&clearInterval(s)},n)}function Ht(e){return e&&e.charAt(0).toUpperCase()+e.slice(1)}class Zn{constructor(){this.rootStylesheet=new CSSStyleSheet,this.styleSheets=[this.rootStylesheet],this.styleKeys=new Set,this.sources=[],this.registry(document)}registry(t){this.sources.push(t);for(const n of this.styleSheets)t.adoptedStyleSheets.push(n)}addStyle(t,n=null){if(n!=null){if(this.styleKeys.has(n))return;this.styleKeys.add(n)}const o=new CSSStyleSheet;o.replaceSync(t),this.styleSheets.push(o);for(const s of this.sources)s.adoptedStyleSheets.push(o)}addRule(t){this.rootStylesheet.insertRule(t,0)}addVar(t,n,o=null){this.addRule(`:root.theme-light { ${t}: ${n} !important;}`),this.addRule(`:root { ${t}: ${o??n};}`)}}const B=new Zn;var Yn=_("./src/modules/customFeed/customFeed.less");B.addStyle(Yn.A);let Vt=null;function ct(){const e=window.location.href.split("/m/");return e.length>1?e[1].split("/")[0]:null}async function Qn(e){const t=await A(()=>e.querySelector("custom-feed-header")),n=await A(()=>t.shadowRoot?.querySelector("img")?.parentElement);B.registry(t.shadowRoot),n.classList.add("pp_customFeed_masthead_ico"),Vt=t.shadowRoot?.querySelector(".text-18")?.textContent}const z="none",Z="currentColor";class ki{}const Gt=document.createElement("div");function W(e,t,n,o){const{viewBox:s,strokeColor:r,fillColor:a}={viewBox:null,strokeColor:Z,fillColor:Z,...o};Gt.innerHTML=e;const c=Gt.firstChild;return c.setAttribute("width",`${t}px`),c.setAttribute("height",`${n}px`),s!=null&&c.setAttribute("viewBox",`0 0 ${s.w} ${s.h}`),c.setAttribute("fill",a),c.setAttribute("stroke",r),c}function ie(e,t,n,o,s={}){const r=W(t,n,o,s);return e.append(r),r}function Ui(e,t,n,o,s={}){const r=W(t,n,o,s);return e.prepend(r),r}function d(e,t,n=null){const o=ut(t,n);return e.append(o),o}function Se(e,t,n=null){const o=ut(t,n);return e.prepend(o),o}function ut(e,t=null){const n=document.createElement(e);if(t!=null)if(typeof t=="string"&&t)n.classList.add(t);else for(const o of t)n.classList.add(o);return n}var Jn=_("./resources/imageCloseButton.svg"),eo=_.n(Jn),to=_("./src/utils/imageViewer.less");B.addStyle(to.A);class Wi{}class ji{}class no{constructor(){this.openned=!1,this.viewer=null,this.container=null,this.image=null,this.mouse={x:0,y:0},this.drag={enabled:!1,start:{x:0,y:0},current:{x:0,y:0},scale:1},this.scrollImage=this.scrollImage.bind(this),this.startDrag=this.startDrag.bind(this),this.mouseMove=this.mouseMove.bind(this),this.endDrag=this.endDrag.bind(this)}open(t){this.openned||(this.openned=!0,this.viewer==null&&this.build(),this.image.src=t,window.addEventListener("wheel",this.scrollImage,{passive:!1}),this.image.addEventListener("mousedown",this.startDrag),document.addEventListener("mousemove",this.mouseMove),this.image.addEventListener("mouseup",this.endDrag),this.image.addEventListener("mouseleave",this.endDrag),this.drag.current={x:0,y:0},this.drag.scale=1,this.updateTransform(),document.body.appendChild(this.viewer))}close(){this.viewer.remove(),this.drag.enabled=!1,this.container.classList.toggle("pp_imageViewer_drag",!1),window.removeEventListener("wheel",this.scrollImage),this.image.removeEventListener("mousedown",this.startDrag),document.removeEventListener("mousemove",this.mouseMove),this.image.removeEventListener("mouseup",this.endDrag),this.image.removeEventListener("mouseleave",this.endDrag),this.openned=!1}build(){this.viewer=document.createElement("div"),this.viewer.classList.add("pp_imageViewer"),this.viewer.dataset.open=String(!1);const t=d(this.viewer,"div","pp_imageViewer_closeButton"),n=W(eo(),40,40);t.appendChild(n),this.container=d(this.viewer,"div","pp_imageViewer_imageContainer"),this.image=d(this.container,"img","pp_imageViewer_image"),this.image.alt="Comment image",this.image.ondragstart=function(){return!1},this.viewer.addEventListener("click",o=>{o.target!=this.image&&this.close()}),t.addEventListener("click",()=>{this.close()})}updateTransform(){this.container.style.transform=`translate(${this.drag.current.x}px, ${this.drag.current.y}px) scale(${this.drag.scale}, ${this.drag.scale})`}startDrag(t){this.drag.start.x=t.screenX-this.drag.current.x,this.drag.start.y=t.screenY-this.drag.current.y,this.drag.enabled=!0,this.container.classList.toggle("pp_imageViewer_drag",!0)}mouseMove(t){this.mouse.x=t.clientX,this.mouse.y=t.clientY,this.drag.enabled&&(this.drag.current.x=t.screenX-this.drag.start.x,this.drag.current.y=t.screenY-this.drag.start.y,this.updateTransform())}endDrag(){this.fit(1),this.drag.enabled=!1,this.container.classList.toggle("pp_imageViewer_drag",!1)}scrollImage(t){const n=Math.max(1,1+Math.log2(this.drag.scale*this.drag.scale)),o=this.drag.scale;this.drag.scale=Math.max(.5,this.drag.scale+-t.deltaY/1e3*n);const s=this.image.getBoundingClientRect(),r=s.height/2,a=s.width/2,c=s.y+r,g=s.x+a,f=this.drag.scale/o-1;this.drag.current.y-=Math.min(Math.max(this.mouse.y-c,-r),r)*f,this.drag.current.x-=Math.min(Math.max(this.mouse.x-g,-a),a)*f,t.deltaY>0&&(this.drag.current.y/=1.1,this.drag.current.x/=1.1),this.fit(.33),t.preventDefault()}fit(t){const o=this.image.getBoundingClientRect(),s=0-o.left,r=o.right-window.innerWidth+0;s>0&&r<0?this.drag.current.x+=(o.width>window.innerWidth?-r:s)*t:s<0&&r>0&&(this.drag.current.x+=(o.width>window.innerWidth?s:-r)*t);const a=0-o.top,c=o.bottom-window.innerHeight+0;a>0&&c<0?this.drag.current.y+=(o.height>window.innerHeight?-c:a)*t:a<0&&c>0&&(this.drag.current.y+=(o.height>window.innerHeight?a:-c)*t),this.updateTransform()}}const _t=new no;var de;(function(e){e.Disabled="Disabled",e.Suggestion="Suggestion",e.Forced="Forced"})(de||(de={}));var ce;(function(e){e.ProfileName="Profile name",e.Nickname="Nickname",e.Both="Both"})(ce||(ce={}));class I{constructor(t,n=!0){this.name=t,this.defailtValue=n}isEnabled(){const t=be.get(this.name);return t instanceof Object?this.defailtValue:t}isDisabled(){return!this.isEnabled()}switch(t=null){be.set(this.name,t??this.isDisabled())}getChild(t,n=!0){return new I(this.name+t,n)}}class ke{constructor(t,n,o=0){this.name=t,this.values=n,this.defaultIndex=o}get(){const t=be.get(this.name);return t instanceof Object?this.values[this.defaultIndex]:t}getIndex(){return this.values.indexOf(this.get())}isDefault(){return this.get()==this.values[this.defaultIndex]}set(t){be.set(this.name,this.values[t])}}class me{constructor(t,n,o=null){this.name=t,this.defaultValue=n,this.filter=o??(s=>s)}get(){const t=be.get(this.name);return t instanceof Object?this.defaultValue:t}isDefault(){return this.get()==this.defaultValue}set(t){be.set(this.name,t)}}function oo(e){return t=>{const n=parseInt(t).toString();return n!="NaN"?n:e.toString()}}function Ue(e){return t=>{const n=Math.abs(parseInt(t)).toString();return n!="NaN"?n:e.toString()}}class so{constructor(){this.revision=this.getRevision(),this.isDirted=!1,this.API_APP=new me("apiApp",""),this.API_WARNINGS=new I("apiWarnings"),this.WIDE_MODE=new I("wideMode"),this.CONTENT_WIDTH=new me("contentWidth","700",Ue(700)),this.CONTENT_OFFSET=new me("contentOffset","0",oo(0)),this.BIGGER_FONTS=new I("biggerFonts"),this.BIGGER_FONTS_CONTENT_SIZE=new me("biggerFontsContentSize","16",Ue(16)),this.BIGGER_FONTS_OTHER_SIZE=new me("biggerFontsOtherSize","12",Ue(12)),this.SCROLL_TO_TOP=new I("scrollToTop"),this.IMAGE_VIEWER=new I("imageViewer"),this.COLLAPSE_AWARDS=new ke("collapseAwards",Object.values(v),1),this.REDIRECT_MODE=new ke("redirectMode",Object.values(de),1),this.NOTIFY_POPUP=new I("notifyPopup"),this.SHOW_FILTERED_CONTENT=new I("showFilteredContent"),this.FILTERED_CONTENT_MAX_COUNT=new me("filteredContentMaxCount","20",Ue(20)),this.SUB_FILTER=new I("sidebarSubFilter"),this.SIDEBAR_GAMES=new I("sidebarGames"),this.SIDEBAR_CUSTOMS=new I("sidebarCustoms"),this.SIDEBAR_RECENT=new I("sidebarRecent"),this.SIDEBAR_SUBS=new I("sidebarSubs"),this.SIDEBAR_RESOURCES=new I("sidebarResources"),this.SIDEBAR_NAV_BUTTON=new I("sidebarNavigation"),this.FEED_BUTTONS=new I("feedButtons"),this.FLAIR_BAR=new I("flairbar"),this.FLAIR_SHOW_ALWAYS=new I("flairShowAlways",!1),this.COLLAPSE_HIGHLIGHTS=new I("collapseHighlights",!1),this.BACKPLATES=new I("backplates"),this.SELECTABLE_POSTS=new I("selectablePosts"),this.UNWRAP_POST=new I("unwrapPost"),this.SHOW_POST_AUTHOR=new I("showPostAuthor"),this.SAVED_BOOKMARK_POSTS=new ke("savedBookmarkPosts",Object.values(l),1),this.COMMENTS_SORT_BUTTONS=new I("commentSortButtons"),this.COMMENTS_REMEMBER_SORT=new I("commentRememberSort"),this.UNWRAP_MORE_REPLIES=new I("unwrapMoreReplies",!1),this.USER_INFO=new I("userInfo",!1),this.USERNAME_MODE=new ke("usernameMode",Object.values(ce),0),this.USERNAME_MAX_SIMBOLS=new me("usernameMaxSimbols","50",Ue(50)),this.USER_TAGS=new I("userTags"),this.HIDE_SHARE=new I("hideShare"),this.GHOSTED_COMMENTS=new I("ghostedComments"),this.COLLAPSE_AUTOMODERATOR=new I("collapseAutomoderator"),this.SAVED_BOOKMARK_COMMENTS=new ke("savedBookmarkComments",Object.values(l),1),this.HIDE_RELATED_POSTS=new I("hideRelatedPosts",!1),window.addEventListener("storage",t=>{this.isDirt()&&!this.isDirted&&(this.isDirted=!0,document.addEventListener("visibilitychange",()=>{window.location.reload()},{once:!0}))})}getRevision(){return parseInt(localStorage.getItem("pp_settings_s_revision")??"0")}nextRevision(){this.revision++,localStorage.setItem("pp_settings_s_revision",String(this.revision))}isDirt(){return this.getRevision()!=this.revision}}const be=new F("SETTINGS"),h=new so;async function fe(e,t){const{seconds:n,color:o}={seconds:3,color:null,...t};let s=await A(()=>document.body?.querySelector("alert-controller")?.shadowRoot?.querySelector("toaster-lite")),r=document.createElement("faceplate-toast");r.classList.add("theme-rpl"),o!=null&&(r.style.backgroundColor=o),r.textContent=e,s.appendChild(r),setTimeout(()=>{r.setAttribute("_fading","")},n*1e3)}function Ce(e){console.log(`Reddit++: ${e}`)}const qt=429;let Ze=null;async function pt(e){try{if(Ze!=null)if(Date.now()>Ze)Ze=null;else return{status:qt,result:null};const t=new Headers({Accept:"text/vnd.reddit.partial+html, text/html;q=0.9","Content-Type":"application/x-www-form-urlencoded"}),n=new URL(`https://www.reddit.com${e}`),o=h.API_APP.get();o!=null&&o.length>0&&(n.search=new URLSearchParams({app:o}).toString());const s=await fetch(n,{credentials:"include",method:"get",headers:t});if(!s.ok){if(Ce(`${e} request failed with code ${s.status} : ${s.statusText}`),s.status==qt){const a=parseInt(s.headers.get("x-ratelimit-reset"));Ze=Date.now()+a*1e3+500,h.API_WARNINGS.isEnabled()&&fe(`API request hit a limit. Disable "API requests" features or set correct App name or wait ${a} seconds`,{seconds:15})}return{status:s.status,result:null}}const r=await s.json();return{status:s.status,result:r}}catch(t){return Ce(`${e} request failed with error: ${t}`),{status:"error",result:null}}}var ro=_("./src/modules/bookmark.less"),io=_("./resources/bookmarkSaved.svg"),ao=_.n(io),lo=_("./resources/bookmarkUnsaved.svg"),co=_.n(lo);B.addStyle(ro.A);function Xt(e,t=!1){const n=h.SAVED_BOOKMARK_COMMENTS.get();if(n==l.Disabled)return;const s=(e.querySelector("shreddit-overflow-menu")?.shadowRoot?.querySelector("rpl-dropdown")).querySelector(".save-comment-menu-button"),r=s.querySelector(".text-14");s.addEventListener("click",()=>{Xt(e,!0)});let a=r.textContent=="Remove from saved";if(t&&(a=!0),a||t||n==l.Always){const c=e.querySelector("shreddit-comment-action-row")?.shadowRoot?.querySelector("button[downvote]");B.registry(e.querySelector("shreddit-comment-action-row")?.shadowRoot);const g=c.cloneNode(!0);c.after(g);let f=g.querySelector("svg");f=Ye(f,a),g.addEventListener("click",()=>{a=!a,f=Ye(f,a)}),g.append(s),s.classList.add("pp_bookmark_hiddenButton")}}async function mt(e,t=!1,n=void 0){const o=h.SAVED_BOOKMARK_POSTS.get();if(o==l.Disabled)return;const s=await A(()=>e.querySelector("shreddit-post-overflow-menu")?.shadowRoot?.querySelector("rpl-dropdown")?.querySelector("faceplate-menu"),3e3);if(s==null)return;let r=!0,a=null;if(s.querySelectorAll("li").forEach(g=>{const f=g.querySelector(".text-14");f.textContent=="Save"&&(r=!1),(f.textContent=="Save"||f.textContent=="Remove from saved")&&(a=g)}),a==null){const g=e.shadowRoot?.querySelector("button[upvote]"),f=e.shadowRoot?.querySelector("button[bookmark]");f.className=g.className,f.classList.add("pp_bookmark_post");return}if(a.addEventListener("click",()=>{mt(e,!0,!0)}),(e.shadowRoot?.querySelector("button[upvote]")).addEventListener("click",()=>{mt(e,!0)}),n!=null&&(r=n),r||t||o==l.Always){const g=e.shadowRoot?.querySelector("button[downvote]"),f=g.cloneNode(!0);f.classList.add("pp_bookmark_post"),f.removeAttribute("disabled"),f.removeAttribute("downvote"),f.setAttribute("bookmark",""),g.after(f);let u=f.querySelector("svg");u=Ye(u,r),f.addEventListener("click",()=>{r=!r,u=Ye(u,r)}),f.append(a),a.classList.add("pp_bookmark_hiddenButton")}}function Ye(e,t){const n=W(t?ao():co(),20,20);return n.setAttribute("width","16px"),n.setAttribute("height","16px"),e.replaceWith(n),n}var $t=_("./src/modules/collapseAwards.less");B.addStyle($t.A);async function zt(e,t){const n=h.COLLAPSE_AWARDS.get();if(n==v.Default)return;B.addStyle($t.A,"collapseAwards");const o=t==i.Comment?e.querySelector("award-button"):e.shadowRoot.querySelector("award-button");if(o!=null){if(n==v.RemoveCompletely){o.remove();return}if(o.getAttribute("count")=="0"){t==i.Post&&B.registry(e.shadowRoot);const s=t==i.Comment?e.querySelector("shreddit-comment-action-row")?.shadowRoot:e?.shadowRoot,r=await A(()=>s?.querySelector("button[upvote]"),E);if(r==null)return;o.classList.toggle("pp_awardButton_hidden",Qe(r)),o.classList.toggle("pp_awardButton_collapsed",Qe(r)),setTimeout(()=>{o.classList.add("pp_awardButton")},500),r.addEventListener("click",()=>{o.classList.toggle("pp_awardButton_hidden",Qe(r)),setTimeout(()=>{o.classList.toggle("pp_awardButton_collapsed",Qe(r))},10)})}}}function Qe(e){return e.getAttribute("aria-pressed")!="true"}var uo=_("./src/modules/subs/flairBar.less");B.addStyle(uo.A);async function Zt(e){if(h.FLAIR_BAR.isDisabled())return;let t=await A(()=>e?.querySelector("shreddit-title")?.parentElement,E);if(t==null)return;const n=e?.querySelector("community-highlight-carousel");n!=null&&(t=n);const o=t.parentElement?.querySelector(".pp_flairBar")?.parentElement;o?.remove();const s=xe(),r=await vt.getWithLoader(s),a=We.get(s);if(r.flairs==null||r.flairs.length==0)return;const c=document.createElement("div");t.before(c);const g=d(c,"div","pp_flairBar");n!=null&&g.classList.add("pp_flairBar_highlights");const f=d(g,"ul",["p-0","m-0","list-none","gap-xs","flex","flex-row","pp_flairBar_list"]);let u=0;for(const k of r.flairs){if(a.hidden!=null&&a.hidden.includes(k.text))continue;const j=d(f,"li","max-w-full");wt(j,s,k),u++}if(u==0){c.remove();return}const p=document.createElement("div");p.classList.add("pp_flairBar_bordersContainer"),c.prepend(p);const S=d(p,"div","pp_flairBar_preBorder"),C=d(S,"div",["pp_flairBar_border","pp_flairBar_border_left"]);C.textContent=" ";const M=d(p,"div","pp_flairBar_preBorder"),L=d(M,"div",["pp_flairBar_border","pp_flairBar_border_right"]);L.textContent=" ";const O=document.createElement("hr");O.classList.add("border-0","border-b-sm","border-solid","border-b-neutral-border-weak"),c.prepend(O);const T=document.createElement("div");T.classList.add("my-xs","mx-2xs0"),c.prepend(T),f.style.left="25px";const P=f.getBoundingClientRect(),H=g.getBoundingClientRect();g.addEventListener("mousemove",k=>{_o(k,f,g)}),P.width>H.width*1.72&&f.classList.add("pp_flairBar_listSmoothed")}function _o(e,t,n){const o=t.getBoundingClientRect(),s=n.getBoundingClientRect();if(o.width<s.width){t.style.left="25px";return}let r=(e.clientX-(s.x+25))/(s.right-25-(s.x+25));r=Math.max(0,Math.min(r,1)),t.style.left=`${Math.round(25-(o.width-s.width+50)*r)}px`}var po=_("./src/modules/subs/subs.less"),mo=_("./resources/settingsArrow.svg"),ft=_.n(mo),fo=_("./src/utils/UI/options.less");B.addStyle(fo.A);function Je(e,t,n,o){let s=t;const r=d(e,"div","pp_ui_options"),a=d(r,"div",["pp_ui_options_arrow","pp_ui_options_inversed","button","button-plain","button-medium","px-[var(--rem8)]"]),c=W(ft(),20,20);a.append(c);const g=d(r,"div","pp_ui_options_container"),f=d(g,"span",["text-secondary","font-normal"]);let u=n[0],p=u.length;for(const P of n)P.length>p&&(u=P,p=P.length);f.textContent=u;const S=f.getBoundingClientRect();f.style.minWidth=`${S.width}px`,f.textContent=n[t];const C=d(g,"span",["pp_ui_options_dots","text-secondary","font-normal"]);C.textContent=T();const M=d(r,"div",["pp_ui_options_arrow","button","button-plain","button-medium","px-[var(--rem8)]"]),L=W(ft(),20,20);M.append(L),a.addEventListener("click",P=>{s--,s<0&&(s=n.length-1),O()}),M.addEventListener("click",P=>{s++,s>=n.length&&(s=0),O()});function O(){f.textContent=n[s],C.textContent=T(),o(s)}function T(){let P=0,H="";for(;P<n.length;)H+=P==s?"\u2022":"\u25E6",P++;return H}return r}var ho=_("./src/utils/UI/toggle.less");B.addStyle(ho.A);function ne(e,t,n){const o=d(e,"div","pp_ui_toggle"),s=d(o,"button","pp_ui_toggle_button");s.classList.toggle("pp_ui_toggle_active",t),d(s,"div","pp_ui_toggle_knob");let r=t;return s.addEventListener("click",()=>{r=!r,s.classList.toggle("pp_ui_toggle_active",r),n(r)}),o}var go=_("./src/utils/window.less"),vo=_("./resources/windowCloseButton.svg"),Eo=_.n(vo);B.addStyle(go.A);let te=[];function wo(){for(;te.length>0;)te[te.length-1].close()}class he{constructor(t,n,o=null){this.tittleContent=t,this.render=n,this.onClose=o,this.container=null,this.content=null,this.closeButton=null}build(){this.container=document.createElement("div"),this.container.classList.add("pp_window_container");let t=!1;this.container.addEventListener("mousedown",a=>{t=a.target==this.container}),this.container.addEventListener("click",a=>{t&&a.target==this.container&&this.close()});const n=d(this.container,"div","pp_window"),o=d(n,"div","pp_window_tittleContainer"),s=d(o,"div",["pp_window_tittle","flex","flex-row"]);this.tittle=d(s,"span",["text-24","font-semibold"]),this.tittle.textContent=this.tittleContent,this.closeButton=d(o,"div",["pp_window_closeButton","flex","items-center"]),this.closeButton=d(this.closeButton,"button",["button","icon","inline-flex","items-center","justify-center","button-small","button-secondary","px-[var(--rem6)]"]),this.closeButton.setAttribute("tittle",`Close ${this.tittleContent}`),this.closeButton.addEventListener("click",a=>{this.close()}),this.closeButton=d(this.closeButton,"span",["flex","items-center","justify-center"]),this.closeButton=d(this.closeButton,"span",["flex"]);const r=W(Eo(),16,16,{strokeColor:z});this.closeButton.append(r),d(n,"hr","border-b-neutral-border-weak"),this.content=d(n,"div","pp_window_content"),d(n,"div","pp_window_footer").textContent=" "}open(t=null){this.container==null&&this.build();for(const n of te)n.container.remove();te.push(this),document.body.appendChild(this.container),document.body.parentElement.style.overflow="hidden",this.render(this,t)}close(){for(this.container.remove(),te.splice(te.findIndex(t=>t==this),1),te.length<=0&&(document.body.parentElement.style.overflow="visible");this.content.firstChild;)this.content.removeChild(this.content.lastChild);if(te.length>0){const t=te[te.length-1];document.body.appendChild(t.container)}this.onClose!=null&&this.onClose()}}var So=_("./src/modules/subs/flairWindow.less");B.addStyle(So.A);const bo=new he("Flairs settings",xo,yo);class Ni{}const Co=["Show","Blur","Hide"];function xo(e,t){const n=d(e.content,"div",["pp_window_scrollContent","styled-scrollbars"]),o=d(n,"div","pp_window_elementsContainer"),s=vt.get(t.sub);for(const r of s.flairs){const a=d(o,"div",["pp_window_element","pp_flairWindow_flair"]),c=d(a,"div","pp_flairWindow_flairContainer");wt(c,t.sub,r);const g=d(a,"span");g.textContent="Flairs bar:",ne(a,!Et(t.sub,r.text,Yt),C=>{je(t.sub,r.text,Yt,!C)});const f=d(a,"span");f.textContent="Feed:";const u=Et(t.sub,r.text,ht),S=Et(t.sub,r.text,gt)?2:u?1:0;Je(a,S,Co,C=>{je(t.sub,r.text,ht,!1),je(t.sub,r.text,gt,!1),C==1&&je(t.sub,r.text,ht,!0),C==2&&je(t.sub,r.text,gt,!0)})}}function yo(){const e=document.body.querySelector("#main-content");Zt(e)}B.addStyle(po.A);const Yt="hidden",ht="blured",gt="banned";class Fi{}class Ki{}const We=new F("FLAIRS"),vt=new F("SUBS",{isCleanupable:!0,validator:Ao,loader:Oo});function Ao(e){return e.flairs==null}async function Oo(e){let t={flairs:[]};const{status:n,result:o}=await pt(`/r/${e}/api/link_flair_v2.json`);if(o!=null&&o.message==null){for(const s of o){const r={text:s.text,color:s.text_color,background:s.background_color,richtext:s.richtext};t.flairs.push(r)}return t}return t}function xe(){const e=window.location.href.split("reddit.com/r/");return e.length>1?e[1].split("/")[0]:null}async function To(e){await A(()=>e.querySelector("shreddit-feed-error-banner"),E)!=null&&(Lo(e),Zt(e),Bo(e))}async function Lo(e){const t=await A(()=>e.parentElement.parentElement.querySelector(".masthead"));$(t)||(t.querySelector("section").classList.add("pp_mastheadSection"),document.body.addEventListener("click",Mo))}async function Bo(e){if(h.COLLAPSE_HIGHLIGHTS.isDisabled())return;const t=await A(()=>e?.querySelector("community-highlight-carousel")?.shadowRoot?.querySelector("button"),E*5);t?.click()}function Mo(e){const t=e.target;if(t.matches("shreddit-subreddit-header-buttons")!=!0||$(t))return;const n=t.shadowRoot.querySelector("shreddit-subreddit-overflow-control").shadowRoot.querySelector("faceplate-menu"),o=n.querySelector("li"),s=o.cloneNode(!0);s.querySelector(".text-14").textContent="Flairs settings",n.prepend(s);const r=xe();s.addEventListener("click",()=>{bo.open({sub:r})});const a=document.createElement("a");a.href="https://www.reddit.com/"+t.getAttribute("prefixed-name")+"/about/",a.classList.add("no-underline"),n.prepend(a);const c=o.cloneNode(!0);c.querySelector(".text-14").textContent="About",a.prepend(c)}class Hi{}class Vi{}function Et(e,t,n){return We.get(e)[n]?.includes(t)??!1}function je(e,t,n,o){const s=We.get(e);let r=s[n];(r==null||r==null)&&(r=[]),o?r.push(t):r=r.filter(a=>a!=t),s[n]=r,We.set(e,s)}function wt(e,t,n,o=!1){const s=d(e,"a","no-decoration");s.href="/r/"+t+"/?f=flair_name%3A%22"+n.text+"%22";const r=d(s,"span",["bg-tone-4","inline-block","truncate","max-w-full","text-12","font-normal","box-border","px-[6px]","pp_flair","leading-4","max-w-full","py-xs","!px-sm","leading-4","h-xl","inline-flex"]);o&&(r.className="bg-tone-4 inline-block truncate max-w-full text-12 font-normal align-text-bottom box-border px-[6px] rounded-[20px] leading-4  relative top-[-0.25rem] xs:top-[-2px] my-2xs xs:mb-sm py-0 "),r.classList.add(n.color=="light"?"text-global-white":"text-global-black"),r.style.backgroundColor=n.background;for(const a of n.richtext){if(a.e=="text"){const c=document.createTextNode(a.t);r.appendChild(c)}if(a.e=="emoji"){const c=document.createElement("faceplate-img");c.classList.add("flair-image"),c.setAttribute("loading","lazy"),c.setAttribute("width","16"),c.setAttribute("height","16"),c.setAttribute("src",a.u),c.setAttribute("alt",a.a),r.appendChild(c)}}if(n.richtext.length==0){const a=document.createTextNode(n.text);r.appendChild(a)}}class Gi{}const Qt=new F("USERS",{isCleanupable:!0,validator:Ro,loader:Do});function Ro(e){return e.accountId==null}async function Do(e){let t={};if(e=="[deleted]")return t.banned=!0,t;const{status:n,result:o}=await pt(`/user/${e}/about.json`);return n!=404&&o==null?t:n==404||o.data?.is_suspended==!0||o.data?.is_blocked==!0?(t.banned=!0,t):(t.rating=(o.data?.link_karma??0)+(o.data?.comment_karma??0)/2,o.data?.subreddit?.title&&(t.nick=o.data.subreddit.title),t.created=o.data?.created??0,t.accountId=o.kind+"_"+o.data?.id,t)}var Po=_("./resources/comments/newUser.svg"),Io=_.n(Po),ko=_("./resources/comments/bannedUser.svg"),Uo=_.n(ko);const Wo=x*64;let et=!1;async function St(e,t,n,o,s){const r=h.USERNAME_MODE.get();if(h.USER_INFO.isDisabled()&&r==ce.ProfileName)return;await A(()=>et?null:!0),et=!0;const a=await Qt.getWithLoader(e,c=>{c?setTimeout(()=>{et=!1},16+Math.random()*32):et=!1});if(r!=ce.ProfileName&&a.nick!=null&&a.nick){const c=parseInt(h.USERNAME_MAX_SIMBOLS.get());if(t.textContent=c<=0||a.nick.length<c?a.nick:a.nick.slice(0,c-2)+"...",r==ce.Both)if(e==t.textContent)t.textContent=`u/${t.textContent}`;else if(s==i.Comment){const g=t.parentElement?.parentElement?.parentElement?.parentElement?.parentElement,f=g.querySelector("author-flair-event-handler");let u=null;f!=null?u=f.parentElement:u=d(g,"div",["flex","flex-none","flex-row","items-center","flex-nowrap","gap-2xs","pt-[2px]"]);const p=Se(u,"div",["font-bold","text-neutral-content-strong","text-12"]);p.textContent=`u/${e}`,p.style.color="#696969"}else{const g=Se(t.parentElement,"div");g.textContent=`| u/${e}`,t.after(g)}}if(h.USER_INFO.isEnabled()){const c=document.createElement("div");if(c.classList.add("text-neutral-content-weak","text-12"),a.rating!=null){c.textContent=a.rating<1e4?`${Math.round(a.rating/100)/10}K`:`${Math.round(a.rating/1e3)}K`,o.after(c);const g=document.createElement("span");s==i.Comment?g.classList.add("inline-block","my-0","mx-2xs","text-12","text-neutral-content-weak"):g.classList.add("inline-block","my-0","created-separator","text-neutral-content-weak"),g.textContent="\u2022",c.after(g)}if(a.created!=null&&a.created>Date.now()/1e3-Wo){const g=W(Io(),20,20);g.setAttribute("viewBox","-2 -2 20 20"),n.before(g)}if(a.banned!=null&&a.banned){const g=W(Uo(),20,20);g.setAttribute("viewBox","-2 -2 20 20"),n.before(g)}}}var jo=_("./src/modules/posts/posts.less"),No=_("./src/modules/posts/postsBackplates.less"),Fo=_("./resources/postUnwrapButton.svg"),Ko=_.n(Fo);class N{}N.COMMENTS_CURRENT_SORT="COMMENTS_CURRENT_SORT",N.SUB_FILTER="SUB_FILTER",N.CONTENT_FILTERS="CONTENT_FILTERS",N.PROFILE_MENU_ELEMENTS="PROFILE_MENU_ELEMENTS";const X=new F("PREFS");var Ho=_("./src/modules/filters/filters.less"),Vo=_("./resources/hiddenIco.svg"),Ne=_.n(Vo),Go=_("./src/modules/filters/hiddenContent.less");const qo=new he("Hidden content",Xo,$o);function Xo(e,t){const n=d(e.content,"div",["pp_window_scrollContent","styled-scrollbars"]),o=d(n,"div","pp_window_elementsContainer");o.style.margin="20px 100px";for(const s of ye)o.prepend(s)}function $o(){for(const e of ye)e.remove()}B.addStyle(Go.A);const ye=new Array;let Ae=0,Oe=0,bt=null,G=null,Ct=null,xt=null,yt=null;function zo(e){ye.push(e),Ae++,ye.length>parseInt(h.FILTERED_CONTENT_MAX_COUNT.get())&&ye.splice(0,1),Jt()}function Zo(){G!=null&&(G.remove(),ye.length=0,Ae=0,Oe=0)}async function Yo(){xt=await A(()=>document.body.querySelector(".main-container")),yt=await A(()=>document.body.querySelector("#right-sidebar-contents"));const e=xt.parentElement;if(G==null){G=ut("div",["pp_hiddenContent_button","text-neutral-content-weak"]);const t=ie(G,Ne(),16,16,{strokeColor:Z,fillColor:z});Ct=d(G,"span"),window.addEventListener("resize",n=>{en()}),G.addEventListener("click",n=>{qo.open()})}else G.classList.toggle("pp_hiddenContent_button_visible",!1);e.parentElement.append(G),setTimeout(()=>{G.classList.add("pp_hiddenContent_button_visible")},250)}function Qo(){const t=Ae-Oe;return t>0?250/t:250}async function Jt(){(G==null||G.parentElement==null)&&await Yo(),Ae==1?(Ct.textContent="1 post",Oe=1):Oe<Ae&&bt==null&&(bt=setTimeout(()=>{Oe++,Ct.textContent=`${Oe} posts`,bt=null,Jt()},Qo())),en()}function en(){const e=h.WIDE_MODE.isEnabled(),t=G.getBoundingClientRect().width+10,n=e?xt.getBoundingClientRect().right:yt.getBoundingClientRect().right,o=e?yt.getBoundingClientRect().left:window.innerWidth-16,s=Ae.toString().length*3;G.style.left=`${(n+o)/2-(50+s)}px`,G.classList.toggle("pp_hiddenContent_button_visible",o-n>t)}B.addStyle(Ho.A);var Y;(function(e){e[e.Hide=0]="Hide",e[e.Blur=1]="Blur",e[e.Hightlight=2]="Hightlight"})(Y||(Y={}));const Jo=Object.values(Y).slice(0,Object.values(Y).length/2);class es{}class qi{}class tn{constructor(){this.hide=!1,this.blur=null}}let tt=null,At=null;function nn(e){let t=X.get(N.CONTENT_FILTERS);Array.isArray(t)||(t=[]);const n=[];for(const o of t)e(o)==!0&&n.push({regExp:new RegExp(o.expression,o.action==Y.Hightlight?"gi":"i"),data:o});return n}async function ts(e){const t=!window.location.href.includes("/comments/");tt==null&&(tt=nn(s=>s.posts==!0));const n=new tn;if(n.isPost=!0,Ot(e.querySelector('a[slot="title"]'),tt,n),e.querySelector('a[slot="text-body"]')?.querySelectorAll("p")?.forEach(s=>{Ot(s,tt,n)}),t&&n.hide){o();return}if(t){const s=await A(()=>e.hasAttribute("pp_flair")?e:null),r=e.getAttribute("pp_flair"),a=sn(e),c=We.get(a);if(r.length>0&&((c.banned?.includes(r)??!1)&&(n.hide=!0),c.blured?.includes(r)??!1)){const f=vt.get(a).flairs.find(u=>u.text==r);n.blur==null&&(n.blur={text:r,color:f.background})}}t&&n.hide?o():t&&n.blur!=null&&on(e,n);async function o(){const s=await A(()=>e.parentElement.nextElementSibling,E);e.remove(),s?.remove(),h.SHOW_FILTERED_CONTENT.isEnabled()&&zo(e)}}function Ot(e,t,n){const o=e?.textContent;if(!(o==null||o.length==0))for(const s of t){if(s.data.action==Y.Blur&&n.blur!=null||s.data.action==Y.Hide&&n.hide)continue;const r=s.regExp.exec(o);if(r!=null&&r.length>0){switch(s.data.action){case Y.Hide:n.hide=!0;break;case Y.Blur:n.blur={text:os(r),color:s.data.color};break}ss(r,s.data,e)}}}function ns(e,t){At==null&&(At=nn(s=>s.comments==!0));const n=new tn;t.querySelectorAll("p").forEach(s=>{Ot(s,At,n)}),n.hide?o():n.blur!=null&&on(t,n);function o(){e.classList.add("pp_hidden_comment");const s=d(e,"div"),r=d(s,"div",["pp_hidden_button","button","button-plain-weak","button-small"]),a=W(Ne(),16,16,{strokeColor:Z,fillColor:z});r.append(a);const c=d(r,"span");c.textContent="Show a hidden comment",r.addEventListener("click",()=>{e.classList.toggle("pp_hidden_comment",!1),s.remove()},{once:!0}),e.prepend(s)}}function os(e){e.length>1&&e.sort((n,o)=>n.length-o.length);let t=e[0].trim();return t.length>50?`${t.slice(0,48).trimEnd()}...`:t}function on(e,t){e.classList.add("pp_blured_content_animator"),e.classList.add("pp_blured_content");const n=Se(e,"div","pp_blured_content_area"),o=Se(e.parentElement,"div","pp_blured_button_container"),s=d(o,"div","pp_blured_button");s.style.backgroundColor=t.blur.color+"55",t.isPost&&(s.style.top="20px");const r=d(s,"div","pp_blured_button_content"),a=ie(r,Ne(),16,16,{strokeColor:Z,fillColor:z}),c=d(r,"span");c.textContent=t.blur.text,n.addEventListener("click",()=>{e.classList.toggle("pp_blured_content",!1),o.remove(),n.remove()},{once:!0})}function ss(e,t,n){let o=n.innerHTML;const s=new Set(e);for(const r of s){const a=o.split(r);if(a.length>1){o=a[0];let c=1;for(;c<a.length;)o+=`<span style="border-radius: 6px; background-color: ${t.color}88;">${r}</span>`,o+=a[c],c++}}n.innerHTML=o}class Xi{}const rs=new F("POSTS",{isCleanupable:!0,validator:is,loader:as});function is(e){return e.flair==null}async function as(e){let t={flair:null};const n=e.split(":"),{status:o,result:s}=await pt(`/r/${n[0]}/comments/${n[1]}.json`);if(s!=null&&s.message==null){for(const r of s)for(const a of r.data.children)if(a.kind=="t3")return t.flair={text:a.data.link_flair_text,color:a.data.link_flair_text_color,background:a.data.link_flair_background_color,richtext:a.data.link_flair_richtext},t}return t}B.addStyle(jo.A),h.BACKPLATES.isEnabled()&&B.addStyle(No.A);async function Fe(e){if($(e))return;ls(e),ts(e),ds(e),us(e),_s(e),cs(e),mt(e),await A(()=>e.shadowRoot?.querySelector("award-button"),E)!=null&&zt(e,i.Post),h.SELECTABLE_POSTS.isEnabled()&&(e.querySelector('a[slot="full-post-link"]')?.remove(),(await A(()=>e.querySelector('a[slot="title"]'),E))?.classList?.add("pp_post_tittle"))}function sn(e){return e.getAttribute("subreddit-prefixed-name").replace("r/","")}async function ls(e){const t=sn(e),n=await A(()=>e.querySelector("shreddit-post-flair"),E),o=await A(()=>n?.querySelector("a"),w);let s="";if(o==null){if(h.FLAIR_SHOW_ALWAYS.isEnabled()){const r=e.getAttribute("permalink")?.split("/");if(r==null||r.length<5){Ce(`Unable to parse post permalink: ${e.getAttribute("permalink")}`);return}const a=r[2]+":"+r[4],c=await rs.getWithLoader(a);c.flair!=null&&c.flair.text!=null&&wt(n,t,c.flair,!0),s=c.flair.text}}else{const r=o.href?.split("%22");s=r!=null&&r.length>1?decodeURIComponent(r[1]):""}e.setAttribute("pp_flair",s)}async function ds(e){const t=await A(()=>e.shadowRoot);B.registry(e.shadowRoot)}async function cs(e){const t=await A(()=>e.shadowRoot?.querySelector("shreddit-post-share-button")?.shadowRoot?.querySelector("button"));B.registry(t.parentNode.parentNode),t.classList.add("pp_post_shareButton")}async function us(e){const t=e.getAttribute("author"),n=e.getAttribute("view-context");if(n=="AggregateFeed"||n=="CustomFeed"){if(h.SHOW_POST_AUTHOR.isDisabled())return;const o=await A(()=>e.querySelector('span[slot="credit-bar"]')?.querySelector(".created-separator"),E),s=document.createElement("a");s.classList.add("flex","items-center","text-neutral-content","visited:text-neutral-content-weak","a","cursor-pointer","no-visited","no-underline","hover:no-underline"),s.setAttribute("href",`/user/${t}/`),o.before(s);const r=d(s,"div",["text-neutral-content-weak","text-12"]);r.textContent=t;const a=document.createElement("span");a.classList.add("inline-block","my-0","created-separator","text-neutral-content-weak"),a.textContent="\u2022",s.before(a),St(t,r,o,o,i.Post)}else{const o=await A(()=>e.querySelector('[slot="credit-bar"]'),E),s=await A(()=>o.querySelector('span[slot="authorName"]')?.querySelector("a")?.querySelector(".whitespace-nowrap"),E),r=o.querySelector(".created-separator");if(r==null)return;St(t,s,r,r,i.Post)}}async function _s(e){if(window.location.href.includes("/comments/")){rn(e,!1);return}const t=await A(()=>e.querySelector(".feed-card-text-preview"),E);if(t==null)return;h.SELECTABLE_POSTS.isEnabled()&&t.parentElement.parentElement.removeAttribute("href"),t.classList.remove("feed-card-text-preview");const n=e.querySelector('a[slot="text-body"]');n?.classList.toggle("pointer-events-none",!1);for(const o of t.childNodes)if(o instanceof Element&&o.matches("object")){const s=o.querySelector("a")?.href;if(s!=null){const r=document.createElement("faceplate-img");r.setAttribute("src",s),r.setAttribute("loading","eager"),r.setAttribute("sizes","(min-width: 1415px) 750px, (min-width: 768px) 50vw, 100vw"),r.className="block w-fit my-0 mx-auto max-w-[100%]",o.replaceWith(r)}}rn(e,!0),ps(e,t)}async function rn(e,t){h.IMAGE_VIEWER.isDisabled()||(t?await A(()=>e.querySelector("faceplate-img"),E)!=null&&e.querySelectorAll("faceplate-img").forEach(o=>{const s=o.getAttribute("src");let r=o.shadowRoot?.querySelector("img");r?.classList.add("pp_imageViewable"),o.addEventListener("click",()=>{_t.open(s)})}):e.querySelectorAll('figure[class="rte-media"]').forEach(n=>{const o=n.querySelector("a"),s=o.getAttribute("href");o.removeAttribute("href");let r=n.querySelector("img");r==null&&(r=n.querySelector("shreddit-player-2")),r.classList.add("pp_imageViewable"),o.addEventListener("click",()=>{_t.open(s)})}))}async function ps(e,t){const n=await A(()=>e.shadowRoot,E),o=t.getBoundingClientRect().height;t.classList.add("pp_post_noWrap");const s=t.getBoundingClientRect().height;if(t.classList.remove("pp_post_noWrap"),s>o+5){const r=d(e,"div","pp_post_unwrapContainer");e.shadowRoot.append(r);const a=d(r,"div","pp_post_unwrapButton"),c=W(Ko(),25,25);a.append(c),a.addEventListener("click",()=>{t.classList.add("pp_post_noWrap"),r.remove()},{once:!0})}}var R;(function(e){e[e.Sub=0]="Sub",e[e.Home=1]="Home",e[e.Popular=2]="Popular",e[e.All=3]="All",e[e.Custom=4]="Custom"})(R||(R={}));const ms=new RegExp("www.reddit.com/user/.*/m/");function Tt(){return window.location.href.includes("?feed=home")||window.location.href=="https://www.reddit.com/"?R.Home:window.location.href.includes("reddit.com/r/popular/")?R.Popular:window.location.href.includes("reddit.com/r/all/")?R.All:ms.test(window.location.href)?R.Custom:R.Sub}function $i(e){return e==R.Sub||e==R.Custom}var J;(function(e){e.Best="Best",e.Hot="Hot",e.New="New",e.Top="Top",e.Rising="Rising"})(J||(J={}));function an(e){switch(e){case R.All:case R.Custom:return Object.values(J).filter(t=>t!=J.Best);default:return Object.values(J)}}var fs=_("./src/modules/feed/feedButtons.less"),hs=_("./resources/feedButtons/feedButtonBest.svg"),ln=_.n(hs),gs=_("./resources/settingsGear.svg"),dn=_.n(gs),vs=_("./resources/feedButtons/feedButtonHot.svg"),Es=_.n(vs),ws=_("./resources/feedButtons/feedButtonNew.svg"),cn=_.n(ws),Ss=_("./resources/feedButtons/feedButtonRising.svg"),bs=_.n(Ss),Cs=_("./resources/feedButtons/feedButtonTop.svg"),un=_.n(Cs),xs=_("./src/utils/changesObserver.less");B.addStyle(xs.A);class Lt{constructor(){this.changes=0,this.bannerContainer=null}CreateSource(t){return new As(this,t)}Reset(){this.changes=0}HasChanges(){return this.changes!=0}OnChange(t){this.changes+=t,this.bannerContainer!=null&&this.bannerContainer.classList.toggle("pp_changesBanner_active",this.HasChanges())}RenderBanner(t){if(this.bannerContainer==null){this.bannerContainer=d(t,"div","pp_changesBannerContainer");const n=d(this.bannerContainer,"div","pp_changesBanner");n.textContent="Page will be reloaded to apply new settings"}else t.append(this.bannerContainer),this.bannerContainer.classList.toggle("pp_changesBanner_active",!1)}}class ys{constructor(t){this.observer=t}}class As extends ys{constructor(t,n){super(t),this.isChanged=!1,this.defaultValue=n}Capture(t){this.defaultValue!=t&&!this.isChanged&&(this.isChanged=!0,this.observer.OnChange(1)),this.defaultValue==t&&this.isChanged&&(this.isChanged=!1,this.observer.OnChange(-1))}}const _n=new Map([[R.Sub,{tittle:"Subreddits",descriptionLabel:"Subreddits",isOverridable:!0,isOptional:!0}],[R.Home,{tittle:"Home",descriptionLabel:"Home",isOverridable:!1,isOptional:!1}],[R.Popular,{tittle:"Popular",descriptionLabel:"r/Popular",isOverridable:!1,isOptional:!1}],[R.All,{tittle:"All",descriptionLabel:"r/All",isOverridable:!1,isOptional:!1}],[R.Custom,{tittle:"Custom feeds",descriptionLabel:"Custom",isOverridable:!0,isOptional:!1}]]);function Os(){if(window.location.href=="https://www.reddit.com/")return!0;if(window.location.href.includes("/?f=flair_name"))return!1;if(window.location.href.includes("?feed=home"))return window.location.href.includes("reddit.com/?feed=home");const e=window.location.href.split("/r/");if(e.length==2)return e[1].split("/").length<=2;const t=window.location.href.split("/m/");return t.length==2?t[1].split("/").length<=2:!1}function Ts(){pn();const e=()=>{let t=document.location.href;const n=document.querySelector("body");new MutationObserver(s=>{t!==document.location.href&&(t=document.location.href,pn())}).observe(n,{childList:!0,subtree:!0})};window.onload=e}function pn(){if(!Os())return;const e=Tt(),t=ot.get(R[e]),n=Mt.get(e);if(e==R.Sub){const o=xe(),s=mn.get(o),r=Ke.get(o);if(r!=null){if(r.defaultSort==s||!r.redirect)return;document.location.replace(`${document.location.href}${r.defaultSort.toString().toLowerCase()}/`);return}if(!t.redirect)return;if(s!=null&&t.defaultSort!=s){document.location.replace(`${document.location.href}${r.defaultSort.toString().toLowerCase()}/`);return}}if(e==R.Custom){const o=ct(),s=Rt.get(o);if(s!=null){if(s.defaultSort==n||!s.redirect)return;document.location.replace(`${document.location.href}${s.defaultSort.toString().toLowerCase()}/`);return}}t.defaultSort!=n&&document.location.replace(`https://www.reddit.com${hn(e,t.defaultSort)}`)}var Ls=_("./src/modules/feed/feedSettings/feedSettingsWindow.less");B.addStyle(Ls.A);const Bs=new he("Feed sort settings",Ms,Rs),nt=new Lt,Bt=new Map;function Ms(e,t){nt.Reset(),nt.RenderBanner(e.content);const n=t.location,o=_n.get(n),s=d(e.content,"div",["pp_window_scrollContent","styled-scrollbars"]),r=d(s,"div","pp_window_elementsContainer");let a=ot.get(R[n]),c=null,g=null,f=null,u=!1,p=null;function S(){return n==R.Custom?`${Vt??g} custom feed`:`r/${g}`}if(o.isOverridable){const O=n==R.Sub;c=O?Ke:Rt,g=O?xe():ct(),f=c.get(g);const T=d(r,"div","pp_window_element"),P=d(T,"div","pp_settings_propertyHeader"),H=d(P,"div","pp_settings_propertyHeader_tittle");H.textContent=`Override ${S()}`;const k=d(P,"div","pp_settings_propertyHeader_description");k.textContent=`Apply settings to this ${O?"subreddit":"custom feed"} only`;const j=d(T,"div","pp_settings_propertyButtonContainer"),q=d(j,"div","pp_window_controlArea");u=f!=null,ne(q,u,ee=>{ee?(f={redirect:a.redirect,defaultSort:a.defaultSort,hiddenSort:[...a.hiddenSort]},c.set(g,f)):c.set(g,null),u=ee,p.classList.toggle("pp_feedSettings_overrideSub",u),C(),L()})}C();function C(){e.tittle.innerHTML=u?`Feed sort: <span class="pp_feedSettings_overrideTittle">${S()}</span>`:`Feed sort: ${o.tittle}`}const M=an(n);L();function L(){p!=null&&(p.remove(),p=null),p=d(s,"div","pp_window_elementsContainer"),p.classList.toggle("pp_feedSettings_overrideSub",u);const O=u?f:a;function T(){u?c.set(g,O):ot.set(R[n],O)}let P=null;if(o.isOptional){const k=d(p,"div","pp_window_element"),j=d(k,"div","pp_settings_propertyHeader"),q=d(j,"div","pp_settings_propertyHeader_tittle");q.textContent="Redirect";const ee=d(j,"div","pp_settings_propertyHeader_description");ee.innerHTML="By default Reddit loads the latest used sort for subs. That option forces redirect to the <b>Default sort</b>";const _e=d(k,"div","pp_settings_propertyButtonContainer"),Ee=d(_e,"div","pp_window_controlArea");ne(Ee,O.redirect,se=>{O.redirect=se,T(),P.classList.toggle("pp_ui_disabled",!O.redirect)})}{const k=d(p,"div","pp_window_element"),j=d(k,"div","pp_settings_propertyHeader"),q=d(j,"div","pp_settings_propertyHeader_tittle");q.textContent="Default sort";const ee=d(j,"div","pp_settings_propertyHeader_description");ee.innerHTML=`By default Reddit uses <b>${Mt.get(n)}</b> sort for <b>${o.descriptionLabel}</b> feed`;const _e=d(k,"div","pp_settings_propertyButtonContainer"),Ee=d(_e,"div","pp_window_controlArea");P=Je(Ee,M.indexOf(O.defaultSort),M,se=>{O.defaultSort=M[se],T()}).parentElement.parentElement.parentElement,P.classList.toggle("pp_ui_disabled",!O.redirect)}const H=d(p,"h3","pp_settings_subtittle");H.textContent="Visible buttons",M.forEach(k=>{const j=d(p,"div","pp_window_element"),q=d(j,"div","pp_settings_propertyHeader"),ee=d(q,"div","pp_settings_propertyHeader_tittle");ee.textContent=k,j.classList.add("pp_settings_property_oneLine");const _e=d(j,"div","pp_settings_propertyButtonContainer"),Ee=d(_e,"div","pp_window_controlArea"),se=!O.hiddenSort.includes(k);let pe=null;Bt.has(k)?(pe=Bt.get(k),pe.Capture(se)):(pe=nt.CreateSource(se),Bt.set(k,pe)),ne(Ee,se,lt=>{lt?O.hiddenSort=O.hiddenSort.filter(dt=>dt!=k):O.hiddenSort.push(k),pe.Capture(lt),T()})})}}function Rs(){nt.HasChanges()&&window.location.reload()}B.addStyle(fs.A);const Ds={Best:ln(),Hot:Es(),New:cn(),Top:un(),Rising:bs()};async function Ps(e){if(h.FEED_BUTTONS.isDisabled()||window.location.href.includes("/about/")||$(e))return;const t=await A(()=>e.querySelector('shreddit-async-loader[bundlename="shreddit_sort_dropdown"]'),E),n=await A(()=>t?.querySelector("shreddit-sort-dropdown"),E);if(n==null||n.getAttribute("trigger-id")=="comment-sort-button")return;t.classList.add("pp_feedPanel");const o=n.parentElement.parentElement,s=Tt();s==R.Custom&&t.previousElementSibling.className=="s:invisible"&&t.previousElementSibling.remove();const r=n.querySelector('div[slot="selected-item"]')?.textContent,a=J[r];n.remove();let c=ot.get(R[s]);if(s==R.Sub){const S=xe(),C=Ke.get(S);C&&(c=C),mn.set(S,a)}if(s==R.Custom){const S=ct(),C=Rt.get(S);C!=null&&(c=C)}const g=an(s);t.parentElement.className!="flex justify-between flex-wrap mb-xs mt-xs"&&(t.parentElement.style.marginBottom="1rem");const f=Se(o,"div","pp_feedPanel_buttons");for(const S of g){if(c.hiddenSort.includes(S)&&S!=a)continue;const C=d(f,"a",["inline-flex","flex-col","text-secondary-plain-weak","font-semibold","rounded-full","hover:no-underline","hover:text-secondary-plain","hover:bg-secondary-background-hover","hover:text-secondary-content","active:bg-secondary-background","ps-[var(--rem16)]","pe-[var(--rem16)]"]);C.href=hn(s,S);const M=S==a;C.classList.toggle("bg-secondary-background-selected",M),C.classList.toggle("!text-neutral-content-strong",M);const L=d(C,"span",["inline-flex","flex-row","items-center","gap-xs","py-[var(--rem10)]","leading-5","font-14"]);let O=Ds[S];if(O!=null){let P=W(O,16,16);L.append(P)}const T=d(L,"span");T.textContent=S}const u=d(o,"div","pp_feedPanel_settings_container"),p=d(u,"div","pp_feedPanel_settings");ie(p,dn(),18,18),p.addEventListener("click",S=>{Bs.open({location:s})})}class zi{}const Mt=new Map([[R.Home,J.Best],[R.Popular,J.Best],[R.All,J.Hot],[R.Sub,J.Best],[R.Custom,J.Hot]]),ot=new F("DEFAULT_FEED_DATA",{factory:function(e){const t=R[e];return{redirect:!_n.get(t).isOptional,defaultSort:Mt.get(t),hiddenSort:[]}}}),Rt=new F("CUSTOM_FEED_DATA",{factory:re.Null}),Ke=new F("SUBS_FEED_DATA",{factory:re.Null}),mn=new F("SUBS_LATEST_SORT",{factory:re.Null});let st=null;async function Is(e){const t=await A(()=>e.querySelector("#subgrid-container"));t.querySelectorAll("shreddit-post").forEach(s=>{Fe(s)});const n=new MutationObserver(s=>{for(const r of s)for(const a of r.addedNodes)a instanceof HTMLElement&&a.matches("shreddit-post")&&Fe(a)});switch(n.observe(t,{childList:!0,subtree:!0}),setTimeout(()=>{n.disconnect()},E),fn(t),Tt()){case R.Sub:To(t);break;case R.Custom:Qn(t);break}Ps(t)}function fn(e){st?.disconnect(),st=new MutationObserver(t=>{for(const n of t)for(const o of n.addedNodes)o instanceof HTMLElement&&(o.matches("faceplate-batch")&&o.querySelectorAll("shreddit-post").forEach(s=>{Fe(s)}),o.matches("article")&&Fe(o.querySelector("shreddit-post")))}),st.observe(e,{childList:!0,subtree:!0})}function hn(e,t){const n=t.toString().toLowerCase();switch(e){case R.Sub:return`/r/${xe()}/${n}/`;case R.Home:return`/${n}/?feed=home`;case R.Popular:return`/r/popular/${n}/`;case R.All:return`/r/all/${n}/`;case R.Custom:let o=window.location.href.split("//www.reddit.com");return o.length>=2?`${o[1]}${n}/`:"/404/";default:return"/404/"}}const Dt="DATABASE_VERSION";class gn{constructor(t,n,o=null){this.version=t,this.action=n,this.previous=o}check(){const t=GM_getValue(Dt,null);if(t==null){GM_setValue(Dt,this.version);return}zn(t,this.version)&&(this.previous?.check(),this.action(),GM_setValue(Dt,this.version),fe(`Reddit++ was upgraded to ${this.version}`))}}const ks=new gn("1.0.0",()=>{const e=GM_getValue("SETTINGS_DATABASE",null);if(e==null)return;const t=e.savedBookmark;t!=null&&(e.savedBookmarkPosts=t,e.savedBookmarkComments=t,delete e.savedBookmark);const n=e.savedBookmarkHideUnsaved;n!=null&&(e.savedBookmarkPostsShowAlways=!n,e.savedBookmarkCommentsShowAlways=!n,delete e.savedBookmarkHideUnsaved),GM_setValue("SETTINGS_DATABASE",e)}),Us=new gn("1.2.0",()=>{const e=GM_getValue("SETTINGS_DATABASE",null);e!=null&&(e.savedBookmarkPosts!=null&&typeof e.savedBookmarkPosts!="string"&&(e.savedBookmarkPosts=(e.savedBookmarkPostsShowAlways==!0?l.Always:e.savedBookmarkPosts==!0?l.WhenUpvoted:l.Disabled).toString()),delete e.savedBookmarkPostsShowAlways,e.savedBookmarkComments!=null&&typeof e.savedBookmarkComments!="string"&&(e.savedBookmarkComments=(e.savedBookmarkCommentsShowAlways==!0?l.Always:e.savedBookmarkComments==!0?l.WhenUpvoted:l.Disabled).toString()),delete e.savedBookmarkCommentsShowAlways,(e.redirectSuggestion!=null||e.redirectForced!=null)&&(e.redirectMode=e.redirectForced==!0?de.Forced:e.redirectSuggestion==!0?de.Suggestion:de.Disabled),delete e.redirectSuggestion,delete e.redirectForced,e.collapseAwards!=null&&typeof e.collapseAwards!="string"&&(e.collapseAwards=(e.collapseAwardsCompletely==!0?v.RemoveCompletely:e.collapseAwards==!0?v.WhenUpvoted:v.Default).toString()),delete e.collapseAwardsCompletely,e.showNames!=null&&typeof e.showNames!="string"&&(e.usernameMode=e.showNames==!0?ce.Nickname:ce.ProfileName,delete e.showNames),GM_setValue("SETTINGS_DATABASE",e),GM_setValue("SETTINGS_REFRESHED",Date.now()));const t=new F("SUBS_SETTINGS");t.forEach((n,o)=>{o.defaultFeed!=null&&o.defaultFeed in J&&Ke.get(n)==null&&Ke.set(n,{redirect:!0,defaultSort:o.defaultFeed,hiddenSort:[]})}),t.wipe()},ks);var Ws=_("./src/modules/wideMode.less");function vn(e){e.className="right-sidebar min-w-0 w-[316px] max-w-[316px] hidden s:block styled-scrollbars xs:sticky xs:top-[56px] xs:max-h-[calc(100vh-var(--shreddit-header-height)-1px)] xs:overflow-y-auto xs:overflow-x-hidden pp_rightSidebar pp_defaultText"}function En(e){return`${parseInt(e)}px`}function js(e,t){if(h.WIDE_MODE.isDisabled()||(B.addStyle(Ws.A,"wideMode"),B.addVar("--pp-content-width",En(h.CONTENT_WIDTH.get())),B.addVar("--pp-content-offset",En(h.CONTENT_OFFSET.get())),t.parentNode==e))return;vn(t);const n=t.parentElement;let o=!(window.innerWidth>=1392);const s=e.querySelector(".main-container");s.className="main-container gap-lg w-full",Ie("WIDEMODE_PAGE",e,r,!1),Ie("WIDEMODE_CONTEXT",n,r,!1);function r(c){return c.classList.contains("rounded-[16px]")&&(c.classList.add("pp_rightSidebar_contextLookup"),window.innerWidth<1392&&c.parentNode!=t.parentNode&&t.after(c)),!1}a(),window.addEventListener("resize",c=>{a()});function a(){window.innerWidth>=1392&&!o&&(e.prepend(t),o=!0),window.innerWidth<1392&&o&&(n.append(t),o=!1)}}var Ns=_("./src/modules/app.less"),Fs=_("./src/modules/sidebar/sidebar.less"),ue;(function(e){e.Home="home",e.Popular="popular",e.Guides="guides",e.Explore="explore",e.All="all"})(ue||(ue={}));let Ks=new Map([[ue.Home,"Home"],[ue.Popular,"Popular"],[ue.Guides,"Answers"],[ue.Explore,"Explore"],[ue.All,"All"]]);async function Hs(e){e==null&&(e=document.body.querySelector("#left-sidebar-container"));const t=await A(()=>e.querySelector("left-nav-top-section"));Object.values(ue).forEach(n=>{const o=h.SIDEBAR_NAV_BUTTON.getChild(Ht(n),!0);t.toggleAttribute(n,o.isEnabled())})}class Yi{}class He{async Render(t,n,o){if($(t))return;t.classList.add("pp_sidebar_loadingSection");const s=await this.GetSectionElements(t);if(t.classList.remove("pp_sidebar_loadingSection"),o.isEnabled()){if(n){const r=o.getChild("Collapsed",!1),a=s.container.querySelector("details");r.isEnabled()&&(s.container.toggleAttribute("open",!1),a.classList.add("pp_sidebar_collapsedSection")),s.button.addEventListener("click",c=>{const g=c.currentTarget;setTimeout(()=>{const f=g.getAttribute("aria-expanded")==="false";r.switch(f)},10),a.classList.toggle("pp_sidebar_collapsedSection",!1)})}}else s.container.remove(),s.bottomLine?.remove()}FindBottomLine(t){let n=t.nextElementSibling;for(;n!=null&&!n.matches("hr");)n=n.nextElementSibling;return n}}class Vs extends He{FindContainer(t,n){let o=null;return t.querySelectorAll("faceplate-expandable-section-helper").forEach(s=>{s.querySelector('summary[aria-controls="multireddits_section"]')!=null&&(o=s)}),o}async GetSectionElements(t){return await A(()=>t.getAttribute("open")),{container:t,button:t.querySelector('summary[aria-controls="multireddits_section"]'),bottomLine:this.FindBottomLine(t)}}}class Gs extends He{FindContainer(t,n){return t.querySelector('faceplate-tracker[noun="games_drawer"]')}async GetSectionElements(t){return await A(()=>t.querySelector("games-section-badge-wrapper")),{container:t,button:t.querySelector('summary[aria-controls="games_section"]'),bottomLine:this.FindBottomLine(t)}}}class qs extends He{FindContainer(t,n){let o=t.querySelector("reddit-recent-pages");return o==null&&n.matches("reddit-recent-pages")&&(o=n),o}async GetSectionElements(t){const n=await A(()=>{const s=t.shadowRoot?.querySelector("faceplate-expandable-section-helper");return s?.getAttribute("open")!=null?s:null}),o=await A(()=>n?.querySelector("summary"));return B.registry(t.shadowRoot),n.classList.add("pp_defaultText"),{container:n,button:o,bottomLine:t.querySelector("hr")}}}class Xs extends He{FindContainer(t,n){return t.querySelector('summary[aria-controls="RESOURCES"]')}async GetSectionElements(t){return{container:t.parentElement.parentElement,button:t,bottomLine:null}}}var $s=_("./resources/subFilter.svg"),zs=_.n($s),Zs=_("./resources/sidebarSubsManager.svg"),Ys=_.n(Zs),Qs=_("./resources/inputClear.svg"),Js=_.n(Qs),er=_("./src/utils/UI/input.less");B.addStyle(er.A);function Pt(e,t,n,o,s){const{icon:r,iconConfig:a,cleanButton:c,alignCenter:g,filter:f}={icon:null,iconConfig:{strokeColor:Z,fillColor:z},cleanButton:!1,alignCenter:!1,filter:T=>T,...s},u=d(e,"div","pp_ui_input_container"),p=d(u,"div",["pp_ui_input_button","button","button-bordered"]);p.setAttribute("tabindex","0");const S=p.attachShadow({mode:"open"});B.registry(S);const C=d(p,"span",["pp_ui_input_panel","flex","items-center","justify-center"]);if(S.appendChild(C),r!=null){const T=d(C,"span","pp_ui_input_icon");ie(T,r,16,16,a)}const M=d(C,"span","pp_ui_input_span");c==!0&&(M.style.marginRight="22px");const L=d(M,"input","pp_ui_input");L.type="text",L.placeholder=t,g==!0&&(L.style.textAlign="center"),n!=null&&n.length>0&&(L.value=n);let O=null;if(c==!0){const T=d(u,"div","pp_ui_input_clearContainer");O=d(T,"button",["pp_ui_input_clearButton","button-plain"]),O.classList.toggle("pp_hidden",(L.value?.length??0)==0);const P=W(Js(),16,16);O.append(P),O.addEventListener("click",()=>{L.value=f(""),o(L.value),O.classList.toggle("pp_hidden",!0)})}return L.addEventListener("input",()=>{const T=f(L.value.trim());o(T),c==!0&&O.classList.toggle("pp_hidden",T.length==0)}),L.addEventListener("focusout",()=>{const T=f(L.value.trim());T!=L.value&&(L.value=T),c==!0&&O.classList.toggle("pp_hidden",T.length==0)}),u}let Ve=null;async function tr(e){if($(e,"pp-sub-filter")||h.SUB_FILTER.isDisabled())return;const t=await A(()=>e.querySelector(".left-nav-manage-communities-link"));Ve!=null?Ve.clear():Ve=new Map,(await A(()=>e.querySelector("left-nav-communities-controller")?.shadowRoot?.querySelector(".items-container"))).querySelectorAll("left-nav-community-item").forEach(f=>{Ve.set(f.getAttribute("prefixedname").replace("r/","").toLowerCase(),f)});let o=X.get(N.SUB_FILTER);(o==null||o instanceof Object)&&(o="");const s=Pt(e,"Filter",o,f=>{wn(f)},{icon:zs(),iconConfig:{strokeColor:z,fillColor:Z},cleanButton:!0,filter:f=>f.trim()});t.style.width="65px",t.style.paddingRight="10px",(await A(()=>t.querySelector(".text-14"))).remove(),t.replaceWith(s),s.prepend(t);const a=t.querySelector("svg"),c=t.querySelector("svg").parentElement;a.remove(),ie(c,Ys(),20,20);const g=s.querySelector(".pp_ui_input_button");g.addEventListener("focus",()=>{t.style.display="none"}),g.addEventListener("focusout",()=>{t.style.display="block"}),wn(o)}function wn(e){X.set(N.SUB_FILTER,e),Ve.forEach((t,n)=>{n.includes(e.toLowerCase())?t.style.removeProperty("display"):t.style.display="none"})}class nr extends He{FindContainer(t,n){let o=null;return t.querySelectorAll("faceplate-expandable-section-helper").forEach(s=>{s.querySelector('summary[aria-controls="communities_section"]')!=null&&(o=s)}),o}async GetSectionElements(t){return await A(()=>t.getAttribute("open")),tr(t),{container:t,button:t.querySelector('summary[aria-controls="communities_section"]'),bottomLine:this.FindBottomLine(t)}}}var ge;(function(e){e.Games="Games",e.Custom="Custom",e.Recent="Recent",e.Subs="Subs",e.Resources="Resources"})(ge||(ge={}));const Sn=new Map([[ge.Games,{tittle:"Games on reddit",autocollapse:!1,setting:h.SIDEBAR_GAMES,renderer:new Gs}],[ge.Custom,{tittle:"Custom feeds",autocollapse:!0,setting:h.SIDEBAR_CUSTOMS,renderer:new Vs}],[ge.Recent,{tittle:"Recent",autocollapse:!0,setting:h.SIDEBAR_RECENT,renderer:new qs}],[ge.Subs,{tittle:"Communities",autocollapse:!0,setting:h.SIDEBAR_SUBS,renderer:new nr}],[ge.Resources,{tittle:"Resources",autocollapse:!0,setting:h.SIDEBAR_RESOURCES,renderer:new Xs}]]);var or=_("./src/modules/sidebar/sidebarSettingsWindow.less");B.addStyle(or.A);const sr=new he("Sidebar settings",rr,ir),Te=new Lt;function rr(e,t){Te.Reset(),Te.RenderBanner(e.content);const n=d(e.content,"div",["pp_window_scrollContent","styled-scrollbars"]),o=d(n,"div","pp_window_elementsContainer");{const a=d(o,"div","pp_window_element"),c=d(a,"div","pp_settings_propertyHeader"),g=d(c,"div","pp_settings_propertyHeader_tittle");g.textContent="Communities filter",a.classList.add("pp_settings_property_oneLine");const f=d(a,"div","pp_settings_propertyButtonContainer"),u=d(f,"div","pp_window_controlArea"),p=Te.CreateSource(h.SUB_FILTER.isEnabled());ne(u,h.SUB_FILTER.isEnabled(),S=>{h.SUB_FILTER.switch(S),p.Capture(h.SUB_FILTER.isEnabled())})}const s=d(o,"h3","pp_settings_subtittle");s.textContent="Sections",Sn.forEach((a,c)=>{const g=d(o,"div","pp_window_element"),f=d(g,"div","pp_settings_propertyHeader"),u=d(f,"div",["text-12","text-secondary-weak","tracking-widest"]);u.textContent=a.tittle.toUpperCase(),g.classList.add("pp_settings_property_oneLine");const p=d(g,"div","pp_settings_propertyButtonContainer"),S=d(p,"div","pp_window_controlArea"),C=Te.CreateSource(a.setting.isEnabled());ne(S,a.setting.isEnabled(),M=>{a.setting.switch(M),C.Capture(a.setting.isEnabled())})});const r=d(o,"h3","pp_settings_subtittle");r.textContent="Navigation buttons",Ks.forEach((a,c)=>{const g=d(o,"div","pp_window_element"),f=d(g,"div","pp_settings_propertyHeader"),u=d(f,"div","pp_settings_propertyHeader_tittle");u.textContent=a,g.classList.add("pp_settings_property_oneLine");const p=d(g,"div","pp_settings_propertyButtonContainer"),S=d(p,"div","pp_window_controlArea"),C=h.SIDEBAR_NAV_BUTTON.getChild(Ht(c),!0),M=Te.CreateSource(C.isEnabled());ne(S,C.isEnabled(),L=>{C.switch(L),M.Capture(C.isEnabled())})})}function ir(){Te.HasChanges()&&(h.nextRevision(),window.location.reload())}B.addStyle(Fs.A);async function ar(e){e.classList.add("pp_defaultText"),Hs(e),lr(e);const t=new Map(Sn);Ie("SIDEBAR",e,n=>{if(t.forEach((o,s,r)=>{const a=o.renderer.FindContainer(e,n);a!=null&&(o.renderer.Render(a,o.autocollapse,o.setting),r.delete(s))}),t.size==0)return!0})}async function lr(e){const t=await A(()=>e.querySelector("#flex-left-nav-container")),n=Se(t,"div");n.setAttribute("id","pp-settings");const o=d(n,"rpl-tooltip");o.setAttribute("placement","right"),o.setAttribute("content","Reddit++ sidebar settings"),o.setAttribute("appearance","inverted"),o.style.cssText="--show-delay: 750ms; --hide-delay: 50ms";const s=d(o,"button");s.className=`bg-neutral-background shadow-xs
button-small px-[var(--rem6)]
button-bordered
icon
items-center justify-center
button inline-flex `,s.addEventListener("click",()=>sr.open());const r=d(s,"span",["flex","items-center","justify-center"]),a=d(r,"span","flex"),c=ie(a,dn(),16,16)}var dr=_("./src/modules/biggerFonts.less");h.BIGGER_FONTS.isEnabled()&&B.addStyle(dr.A);function cr(){h.BIGGER_FONTS.isEnabled()&&(B.addVar("--pp-biggerFonts-Content",`${h.BIGGER_FONTS_CONTENT_SIZE.get()}px`),B.addVar("--pp-biggerFonts-Other",`${h.BIGGER_FONTS_OTHER_SIZE.get()}px`))}var ur=_("./src/modules/comments/hideShare.less"),_r=_("./src/modules/comments/comments.less");class bn{getInput(t,n){}run(t,n){let o=Qt.get(n);const s={csrf_token:$n("csrf_token"),operation:this.key,variables:{input:this.getInput(t,o.accountId)}};fetch("https://www.reddit.com/svc/shreddit/graphql",{method:"post",headers:new Headers({Accept:"application/json","Content-Type":"application/json"}),body:JSON.stringify(s)}).then(r=>r.json()).then(r=>{r!=null&&r.errors?.message&&fe(r.errors.message)})}}class pr extends bn{constructor(){super(...arguments),this.key="UpdateProfileFollowState",this.enable="FOLLOWED",this.disable="NONE"}getInput(t,n){return{accountId:n,state:t?this.enable:this.disable}}}class mr extends bn{constructor(){super(...arguments),this.key="UpdateRedditorBlockState",this.enable="BLOCKED",this.disable="NONE"}getInput(t,n){return{redditorId:n,blockState:t?this.enable:this.disable}}}const fr=new pr,hr=new mr;var gr=_("./resources/comments/userTags/followedIcon.svg"),vr=_.n(gr),Er=_("./resources/comments/userTags/likedIcon.svg"),wr=_.n(Er),Sr=_("./resources/comments/userTags/warningIcon.svg"),br=_.n(Sr),Cr=_("./resources/comments/userTags/blockedIcon.svg"),xr=_.n(Cr),yr=_("./resources/comments/userTags/followedButton.svg"),Ar=_.n(yr),Or=_("./resources/comments/userTags/likedButton.svg"),Tr=_.n(Or),Lr=_("./resources/comments/userTags/warningButton.svg"),Br=_.n(Lr),Mr=_("./resources/comments/userTags/blockedButton.svg"),Rr=_.n(Mr),Dr=_("./src/modules/comments/userTags.less");class K{}K.FOLLOWED="Followed",K.LIKED="Liked",K.WARNING="Warning",K.BLOCKED="Blocked";class Qi{}const Le=new Map([[K.FOLLOWED,{priority:100,addHint:"Follow",removeHint:"Unfollow",color:"#0b7ed3",icon:vr(),button:Ar()}],[K.LIKED,{priority:2,addHint:"Tag as liked",removeHint:"Remove liked tag",color:"#C95A54",icon:wr(),button:Tr()}],[K.WARNING,{priority:1,addHint:"Tag as warned",removeHint:"Remove warned tag",color:"#D4A343",icon:br(),button:Br()}],[K.BLOCKED,{priority:0,addHint:"Block",removeHint:"Unblock",color:"#663988",icon:xr(),button:Rr()}]]);class Ji{}const Be=new F("TAGS");async function Cn(e){if(h.USER_TAGS.isDisabled())return;B.addStyle(Dr.A,"userTags");const t=e.getAttribute("author");if(t==null)return;const n=Be.get(t),o=await A(()=>e.querySelector('div[pp-anchor="tags"]'),E);if(o==null)return;if(o.parentNode.querySelectorAll('svg[userTag="true"]').forEach(r=>{r.remove()}),n.tags!=null)for(const r of n.tags)s(r);function s(r){const a=Le.get(r),c=W(a.icon,20,20);c.setAttribute("userTag","true"),c.setAttribute("viewBox","-4 -4 20 20"),c.style.color=a.color,o.after(c)}}class ea{}const Pr=x+42,xn="#adadad";function Ir(e,t){if(h.USER_TAGS.isDisabled())return;const n=document.createElement("div");n.classList.add("pp_tagHint_offset"),e.prepend(n);const o=document.createElement("div");o.classList.add("pp_tagHintContainer"),n.prepend(o);const s=d(o,"div","pp_tagHint");s.style.display="none";const r=document.createElement("div");r.classList.add("pp_tagsPanel"),n.after(r),Le.forEach((c,g)=>{a(c,g)});function a(c,g){const f=d(r,"span","pp_tagButton");f.setAttribute("userTag",g);const u=W(c.button,20,20);f.appendChild(u);const p={userTag:g,userId:t,button:f,hint:s};f.addEventListener("click",()=>{kr(p)}),f.addEventListener("mouseenter",()=>{Ur(p)}),f.addEventListener("mouseleave",()=>{Wr(p)})}yn(r,t)}function yn(e,t){const n=Be.get(t),o=n?.tags??[];e.querySelectorAll(".pp_tagButton").forEach(s=>{const r=s.getAttribute("userTag"),a=Le.get(r);s.removeAttribute("has-cooldown"),s.removeAttribute("has-blocked"),o.includes(r)?(s.classList.toggle("pp_tagButtonActive",!0),s.style.backgroundColor=a.color,s.style.color="white"):(s.classList.toggle("pp_tagButtonActive",!1),s.style.color=a.color,s.style.removeProperty("background-color"),r==K.BLOCKED&&n.blockCooldown!=null&&Date.now()/1e3<n.blockCooldown&&(s.setAttribute("has-cooldown",""),s.style.color=xn),r==K.FOLLOWED&&o.includes(K.BLOCKED)&&(s.setAttribute("has-blocked",""),s.style.color=xn))})}function kr(e){if(e.button.getAttribute("has-cooldown")!=null||e.button.getAttribute("has-blocked")!=null){fe("Unable to do this");return}let t=Be.get(e.userId);t.tags==null&&(t.tags=[]);let n=!1;t.tags.includes(e.userTag)?t.tags=t.tags.filter(o=>o!=e.userTag):(t.tags.push(e.userTag),n=!0,e.userTag==K.BLOCKED&&(t.tags=t.tags.filter(o=>o!=K.FOLLOWED))),t.tags.length>1&&t.tags.sort((o,s)=>Le.get(o).priority-Le.get(s).priority),Be.set(e.userId,t),document.body.querySelectorAll(`shreddit-comment[author="${e.userId}"]`).forEach(o=>{Cn(o),n&&e.userTag==K.BLOCKED&&o.setAttribute("collapsed","")}),e.userTag==K.FOLLOWED&&fr.run(n,e.userId),e.userTag==K.BLOCKED&&(n||(t.blockCooldown=Date.now()/1e3+Pr,Be.set(e.userId,t)),hr.run(n,e.userId)),yn(e.button.parentElement,e.userId)}function Ur(e){e.hint.style.display=null,e.hint.dataset.target=e.userTag;const t=Be.get(e.userId),n=Le.get(e.userTag),o=(t?.tags??[]).includes(e.userTag);if(e.hint.innerText=o?n.removeHint:n.addHint,e.button.getAttribute("has-cooldown")!=null){const s=Math.round((t.blockCooldown-Date.now()/1e3)/b);e.hint.innerText=`Unable to block for ${s}h after unblocking`}e.button.getAttribute("has-blocked")!=null&&(e.hint.innerText="Unable to follow on blocked user")}function Wr(e){e.hint.dataset?.target==e.userTag&&(e.hint.style.display="none")}var jr=_("./resources/comments/shareButton.svg"),Nr=_.n(jr);function Fr(e){let t=e.querySelector("shreddit-overflow-menu").shadowRoot;B.registry(t);const n=t.querySelector("faceplate-menu"),o=n.querySelector('faceplate-tracker[noun="report"]');if(h.HIDE_SHARE.isEnabled()){let s=o.cloneNode(!0);s.querySelector("span .text-14").textContent="Copy link",o.before(s);const r=s.querySelector("svg"),a=W(Nr(),20,20);r.replaceWith(a);const c=e.getAttribute("permalink");s.addEventListener("click",()=>{navigator.clipboard.writeText(`https://www.reddit.com${c}`),fe("Link copied")})}Ir(n,e.getAttribute("author"))}var Kr=_("./src/modules/comments/sortButtons.less"),Hr=_("./resources/comments/sortButtons/controversial.svg"),Vr=_.n(Hr),Gr=_("./resources/comments/sortButtons/old.svg"),qr=_.n(Gr),Xr=_("./resources/comments/sortButtons/qa.svg"),$r=_.n(Xr);class Q{}Q.BEST="Best",Q.TOP="Top",Q.NEW="New",Q.CONTROVERSIAL="Controversial",Q.OLD="Old",Q.QA="QA";class ta{}const Ge="sort=";function Me(e,t){return t==="confidence"&&!e.includes("?")?!0:e.includes(`${Ge}${t}`)}const qe=new Map([[Q.BEST,{icon:ln(),href:"confidence",isCurrent:e=>Me(e,"confidence")}],[Q.TOP,{icon:un(),href:"top",isCurrent:e=>Me(e,"top")}],[Q.NEW,{icon:cn(),href:"new",isCurrent:e=>Me(e,"new")}],[Q.CONTROVERSIAL,{icon:Vr(),href:"controversial",isCurrent:e=>Me(e,"controversial")}],[Q.OLD,{icon:qr(),href:"old",isCurrent:e=>Me(e,"old")}],[Q.QA,{icon:$r(),href:"qa",isCurrent:e=>Me(e,"qa"),overrideName:"Q&A"}]]);let It=!1;function An(){let e=X.get(N.COMMENTS_CURRENT_SORT);return e instanceof Object&&(e=Q.BEST),e}function On(){if(h.COMMENTS_REMEMBER_SORT.isEnabled()&&window.location.href.includes("/comments/")){const e=qe.get(An());if(e.isCurrent(window.location.href))return!1;let t=window.location.href;const n=t.includes("?")&&!t.includes(Ge);if(t.includes(Ge)){const o=t.indexOf(Ge);t=t.slice(0,o-1)}return window.location.replace(t+(n?"&":"?")+Ge+e.href),!0}return!1}async function Tn(e){if(h.COMMENTS_SORT_BUTTONS.isDisabled())return;B.addStyle(Kr.A,"sortButtons"),It=!1;const t=await A(()=>e.querySelector("comment-body-header")?.querySelector(".pdp-comments-tree-sort-container"),E);if(t==null||$(t))return;zr(e),t.querySelector("shreddit-sort-dropdown").classList.add("pp_sortDropdown_hidden");let n;h.COMMENTS_REMEMBER_SORT.isEnabled()?n=An():qe.forEach((s,r)=>{s.isCurrent(window.location.href)&&(n=r)}),qe.forEach((s,r)=>{o(r,s)});function o(s,r){const a=d(t,"div","pp_sortButton");a.classList.toggle("pp_sortButton_active",s==n),a.setAttribute("commentSort",s),a.addEventListener("click",()=>{Yr(s)});const c=d(a,"span"),g=W(r.icon,16,16);c.append(g);const f=d(a,"span");f.textContent=r.overrideName!=null?r.overrideName:s}It=!0}async function zr(e){const t=await A(()=>e.querySelector("comment-body-header")?.querySelector("pdp-comment-search-input")?.shadowRoot?.querySelector(".pr-xs"),E);t!=null&&(t.textContent="Search")}let kt=!1;function Zr(){kt=!1,It||Tn(document.body)}async function Yr(e){if(kt){fe("Unable to switch sort while loading comments");return}const t=await A(()=>document.body.querySelector("comment-body-header")?.querySelector(".pdp-comments-tree-sort-container"),E),n=qe.get(e);t.querySelector(`data[value="${n.href.toUpperCase()}"]`).click(),X.set(N.COMMENTS_CURRENT_SORT,e),kt=!0;const s=setInterval(()=>{n.isCurrent(window.location.href)&&(clearInterval(s),qe.forEach((r,a)=>{t.querySelector(`div[commentSort="${a}"]`).classList.toggle("pp_sortButton_active",a==e)}))},20)}function Ln(e){if(!h.UNWRAP_MORE_REPLIES.isDisabled()&&e.getAttribute("collapsed")==null){for(const t of e.childNodes)if(t instanceof HTMLElement){if(t.matches("faceplate-partial")&&t.getAttribute("src")?.includes("/more-comments/")&&!$(t)){t.click();let n=0;const o=setInterval(()=>{if(n++,t.parentNode==null){clearInterval(o),setTimeout(()=>{Ln(e)},50);return}n>60&&(clearInterval(o),Ce("Unable load more replies"))},100)}t.matches("a")&&t.getAttribute("slot")=="more-comments-permalink"&&(t.querySelector(".text-secondary-weak").textContent="More replies in single thread")}}}let Xe=null,$e=null,rt=null;async function Qr(e){B.addStyle(_r.A,"comments"),h.HIDE_SHARE.isEnabled()&&B.addStyle(ur.A,"hideShare"),Xe!=null?Xe.disconnect():Xe=new IntersectionObserver(t=>{for(const n of t)n.isIntersecting&&(Dn(n.target.parentElement),Mn(n.target.parentElement),Xe.unobserve(n.target))},{threshold:.05}),$e!=null?$e.disconnect():$e=new IntersectionObserver(t=>{for(const n of t)n.isIntersecting&&(Dn(n.target.parentElement),$e.unobserve(n.target))},{threshold:.05}),rt!=null?rt.disconnect():rt=new MutationObserver(t=>{for(const n of t)for(const o of n.addedNodes)if(o instanceof HTMLElement){const s=o.parentElement?.querySelector("shreddit-comment-tree");if(s!=null&&(Jr(s),Zr()),o.matches("shreddit-comment")&&(o.getAttribute("depth")=="0"?Bn(o):(Rn(o),Mn(o))),h.HIDE_RELATED_POSTS.isEnabled()&&o.matches("h2")&&o.textContent.includes("Related posts")){const r=o,a=r.nextSibling;r.remove(),a.remove()}}}),rt.observe(e,{childList:!0,subtree:!0}),Tn(e)}function Jr(e){e.querySelectorAll('shreddit-comment[depth="0"]').forEach(t=>{Bn(t)})}function Bn(e){$(e)||Xe.observe(e.querySelector('div[slot="commentMeta"]'))}function Mn(e){e.querySelectorAll("shreddit-comment").forEach(t=>{Rn(t)})}function Rn(e){$(e)||$e.observe(e.querySelector('div[slot="commentMeta"]'))}async function Dn(e){const t=e.querySelector('div[slot="comment"]');if(ns(e,t),h.COLLAPSE_AUTOMODERATOR.isEnabled()){const p=e.getAttribute("author");if(p!=null&&p=="AutoModerator"){e.setAttribute("collapsed","");return}const S=e.querySelector('div[slot="commentMeta"]')?.querySelector('shreddit-comment-author-modifier-icon[distinguished-as="MODERATOR"]')!=null,C=e.querySelector("shreddit-comment-badges")?.shadowRoot?.querySelector('svg[icon-name="pin-fill"]')!=null;if(S&&C){e.setAttribute("collapsed","");return}}setTimeout(()=>{Ln(e)},150);const n=e.querySelector('div[slot="commentMeta"]').querySelector('faceplate-tracker[noun="comment_author"]')?.parentElement?.parentElement;if(n==null)return;const o=document.createElement("div");o.setAttribute("pp-anchor","tags");const s=n.parentElement.querySelector(".ml-2xs");s!=null?s.after(o):n.after(o);const r=await A(()=>n.parentElement.querySelector("time")?.parentElement,E),a=document.createElement("div");a.setAttribute("pp-anchor","info"),r?.before(a),h.GHOSTED_COMMENTS.isEnabled()&&parseInt(e.getAttribute("score"))<0&&(e.querySelector('div[slot="commentAvatar"]').classList.add("pp_muted_avatar"),e.querySelector('faceplate-tracker[noun="comment_author"]').querySelector("a").style.color="#a5a5a5",t.classList.add("pp_muted_content"));const c=t.querySelector('figure[class="rte-media"]');if(c!=null&&h.IMAGE_VIEWER.isEnabled()){const p=c.querySelector("a"),S=p.getAttribute("href");p.removeAttribute("href");let C=c.querySelector("img");C==null&&(C=c.querySelector("shreddit-player-2")),C.classList.add("pp_imageViewable"),p.addEventListener("click",()=>{_t.open(S)})}zt(e,i.Comment),Cn(e);const g=e.getAttribute("author"),f=e.querySelector('faceplate-tracker[noun="comment_author"]').querySelector("a");St(g,f,o,a,i.Comment);const u=await A(()=>e.querySelector("shreddit-overflow-menu")?.shadowRoot?.querySelector("rpl-dropdown"));Xt(e),u.addEventListener("click",()=>{Fr(e)},{once:!0})}async function ei(e){const t=await A(()=>e.querySelector("#subgrid-container")?.querySelector("shreddit-feed"));t.querySelectorAll("shreddit-post").forEach(n=>{Fe(n)}),fn(t)}async function Pn(){B.addStyle(Ns.A,"app");const e=await A(()=>document.body.querySelector("shreddit-app")?.querySelector(".grid-container"));if($(e))return;Zo(),wo(),window.location.href.includes("/user/")&&!window.location.href.includes("/m/")?ei(document.body):Is(document.body),Qr(document.body);const t=await A(()=>document.body.querySelector("#left-sidebar-container"),3e3);ar(t);const n=t.parentElement;n.classList.add("pp_pageContainer"),n.querySelector(".subgrid-container").classList.add("pp_mainFeed");const s=await A(()=>document.body.querySelector("#right-sidebar-container"));vn(s),js(n,s),cr()}var ti=_("./src/modules/header.less"),ni=_("./src/modules/notifications.less");h.NOTIFY_POPUP.isEnabled()&&B.addStyle(ni.A);function oi(e){e.querySelectorAll('div[data-testid="notification-item"]').forEach(t=>{const n=t.querySelector('div[data-testid="title"]'),o=t.querySelector(".text-secondary-plain");if(o.textContent.includes("replied")){o.textContent=o.textContent.split("replied")[0];const r=document.createElement("div");n.after(r);const a=d(r,"span",["text-secondary-weak","font-normal"]);let c=t.parentElement.getAttribute("href");c=c.replace("https://reddit.com/r/",""),c=c.split("/")[0],a.textContent=`replied in r/${c}`}const s=t.querySelector("faceplate-number");if(s!=null){const r=document.createElement("span");r.textContent=" ago",s.after(r)}})}var si=_("./resources/settingsButton.svg"),ri=_.n(si),ii=_("./resources/dragAnchor.svg"),In=_.n(ii),ai=_("./resources/deleteButton.svg"),kn=_.n(ai),li=_("./resources/contentFilter.svg"),di=_.n(li),ci=_("./src/modules/filters/filtersWindow.less");const ui=new he("Content filters",_i,pi);B.addStyle(ci.A);function _i(e,t){e.container.style.zIndex="11",Un();const n=d(e.content,"div",["pp_window_scrollContent","styled-scrollbars"]),o=d(n,"ul","pp_filter_list");let s=X.get(N.CONTENT_FILTERS);Array.isArray(s)||(s=[]);for(const u of s)c(u);g();let r=null;o.addEventListener("dragstart",u=>{const p=u.target;p.matches("li")&&(r=p,r.classList.toggle("pp_filter_dragged",!0),u.dataTransfer.effectAllowed="move")}),o.addEventListener("dragenter",u=>{const p=a(u.target);p!=null&&p!=r&&u.preventDefault()}),o.addEventListener("dragend",u=>{r.classList.toggle("pp_filter_dragged",!1),r=null}),o.addEventListener("dragover",u=>{const p=a(u.target);p!=null&&p!=r&&u.preventDefault()}),o.addEventListener("drop",u=>{u.preventDefault();const p=a(u.target);if(p==null)return;const S=parseInt(r.getAttribute("index")),C=parseInt(p.getAttribute("index")),M=s[S];s.splice(S,1),s.splice(C,0,M),f(),S>C?p.before(r):p.after(r);let L=o.firstElementChild,O=0;for(;L.hasAttribute("filter");)L.setAttribute("index",O.toString()),O++,L=L.nextElementSibling});function a(u){let p=u;for(;!p.hasAttribute("filter")&&p.parentElement!=null;)p=p.parentElement;return p.hasAttribute("filter")?p:null}function c(u,p=null){const S=d(o,"li","pp_filter_element");S.style.borderColor=k(u.color),S.toggleAttribute("filter",!0),S.setAttribute("index",s.findIndex(V=>V==u).toString()),p?.before(S);const C=d(S,"div"),M=d(C,"div","pp_filter_element_dragAnchor"),L=W(In(),16,16,{strokeColor:z,fillColor:Z});M.append(L),M.addEventListener("mousedown",()=>{S.setAttribute("draggable","true")}),M.addEventListener("mouseenter",()=>{S.setAttribute("draggable","true")}),M.addEventListener("mouseleave",()=>{S.setAttribute("draggable","false")});const O=Pt(C,"Regular expression",u.expression,V=>{u.expression=V,f()},{icon:di()}),T=d(C,"div","pp_filter_element_colorPicker"),P=d(T,"input");P.setAttribute("type","color"),P.setAttribute("value",u.color),P.addEventListener("input",H),P.addEventListener("change",H);function H(V){u.color=V.target.value,S.style.borderColor=k(u.color),f()}function k(V){return u.posts||u.comments?V:`${V}4f`}const j=d(C,"div","pp_filter_element_toggles"),q=d(j,"div"),ee=d(q,"span",["text-secondary","font-normal"]);ee.textContent="Posts:",ne(q,u.posts,V=>{u.posts=V,S.style.borderColor=k(u.color),f()});const _e=d(j,"div"),Ee=d(_e,"span",["text-secondary","font-normal"]);Ee.textContent="Comments:",ne(_e,u.comments,V=>{u.comments=V,S.style.borderColor=k(u.color),f()});const se=Je(C,u.action,Jo,V=>{u.action=V;let we=null;switch(u.action){case Y.Hide:we="#6A51D9";break;case Y.Blur:we="#5BB3D9";break;case Y.Hightlight:we="#74CB39";break}we!=null&&(u.color=="#6A51D9"||u.color=="#5BB3D9"||u.color=="#74CB39")&&(u.color=we,S.style.borderColor=k(we),P.setAttribute("value",we)),f()}),pe=O.querySelector(".pp_ui_input_button");pe.addEventListener("focus",()=>{T.classList.toggle("pp_hidden",!0),j.classList.toggle("pp_hidden",!0),se.classList.toggle("pp_hidden",!0)}),pe.addEventListener("focusout",()=>{T.classList.toggle("pp_hidden",!1),j.classList.toggle("pp_hidden",!1),se.classList.toggle("pp_hidden",!1)});const lt=d(C,"span"),dt=d(lt,"div",["pp_ui_options_arrow","button","button-plain","button-medium","px-[var(--rem8)]"]),Pi=W(kn(),24,24,{strokeColor:z,fillColor:Z});dt.append(Pi),dt.addEventListener("click",()=>{s.splice(s.findIndex(V=>V==u),1),f(),S.remove()})}function g(){const u=d(o,"div",["pp_filter_addButton","button","button-primary","inline-flex","items-center","justify-center"]),p=d(u,"span",["flex","items-center","justify-center"]),S=d(p,"span",["flex","items-center","gap-xs"]);S.textContent="Add a filter",u.addEventListener("click",()=>{const C=new es;C.expression="",C.color="#6A51D9",C.posts=!0,C.comments=!0,C.action=Y.Hide,s.push(C),c(C,u),f(),n.scrollBy(0,200)})}function f(){X.set(N.CONTENT_FILTERS,s)}}function pi(){Un()}function Un(){let e=X.get(N.CONTENT_FILTERS);Array.isArray(e)||(e=[]),e=e.filter(t=>t!=null&&t.expression!=null&&t.expression.length>0),X.set(N.CONTENT_FILTERS,e)}var mi=_("./src/modules/settings/settingsWindow.less"),fi=_("./resources/showIco.svg"),Wn=_.n(fi),hi=_("./src/modules/profileMenu/profileMenuWindow.less");B.addStyle(hi.A);const gi=new he("Profile menu elements",vi,Ei),it="profileMenuElement";function vi(e,t){e.container.style.zIndex="11",jn();const n=d(e.content,"div",["pp_window_scrollContent","styled-scrollbars"]),o=d(n,"ul","pp_filter_list");let s=X.get(N.PROFILE_MENU_ELEMENTS);Array.isArray(s)||(s=Wt());for(const u of s)c(u);g();let r=null;o.addEventListener("dragstart",u=>{const p=u.target;p.matches("li")&&(r=p,r.classList.toggle("pp_filter_dragged",!0),u.dataTransfer.effectAllowed="move")}),o.addEventListener("dragenter",u=>{const p=a(u.target);p!=null&&p!=r&&u.preventDefault()}),o.addEventListener("dragend",u=>{r.classList.toggle("pp_filter_dragged",!1),r=null}),o.addEventListener("dragover",u=>{const p=a(u.target);p!=null&&p!=r&&u.preventDefault()}),o.addEventListener("drop",u=>{u.preventDefault();const p=a(u.target);if(p==null)return;const S=parseInt(r.getAttribute("index")),C=parseInt(p.getAttribute("index")),M=s[S];s.splice(S,1),s.splice(C,0,M),f(),S>C?p.before(r):p.after(r);let L=o.firstElementChild,O=0;for(;L.hasAttribute(it);)L.setAttribute("index",O.toString()),O++,L=L.nextElementSibling});function a(u){let p=u;for(;!p.hasAttribute(it)&&p.parentElement!=null;)p=p.parentElement;return p.hasAttribute(it)?p:null}function c(u,p=null){const S=d(o,"li","pp_filter_element");S.style.borderColor=T(),S.toggleAttribute(it,!0),S.setAttribute("index",s.findIndex(k=>k==u).toString()),p?.before(S);const C=d(S,"div"),M=d(C,"div","pp_filter_element_dragAnchor"),L=W(In(),16,16,{strokeColor:z,fillColor:Z});M.append(L),M.addEventListener("mousedown",()=>{S.setAttribute("draggable","true")}),M.addEventListener("mouseenter",()=>{S.setAttribute("draggable","true")}),M.addEventListener("mouseleave",()=>{S.setAttribute("draggable","false")});const O=d(C,"div","pp_profileMenuElement_tittleContainer");if(u.element==D.Separator)d(O,"hr");else{const k=d(O,"span");k.textContent=Ut.get(u.element).tittle}function T(){return u.hidden?"#bdbdbd":"#00adff"}const P=u.element==D.Separator;if(P||Ut.get(u.element).isOptional){const k=d(C,"span"),j=d(k,"div",["pp_ui_options_arrow","button","button-plain","button-medium","px-[var(--rem8)]"]);let q=null;P?q=ie(j,kn(),24,24,{strokeColor:z,fillColor:Z}):q=ie(j,u.hidden?Ne():Wn(),18,18,{strokeColor:Z,fillColor:z}),j.addEventListener("click",()=>{P?(s.splice(s.findIndex(ee=>ee==u),1),S.remove()):(u.hidden=!u.hidden,S.style.borderColor=T(),q.remove(),q=ie(j,u.hidden?Ne():Wn(),18,18,{strokeColor:Z,fillColor:z})),f()})}}function g(){const u=d(o,"div",["pp_filter_addButton","button","button-primary","inline-flex","items-center","justify-center"]),p=d(u,"span",["flex","items-center","justify-center"]),S=d(p,"span",["flex","items-center","gap-xs"]);S.textContent="Add a separator",u.addEventListener("click",()=>{const C={};C.element=D.Separator,C.hidden=!1,s.push(C),c(C,u),f(),n.scrollBy(0,200)})}function f(){X.set(N.PROFILE_MENU_ELEMENTS,s)}}function Ei(){jn(),Nn()}function jn(){let e=X.get(N.PROFILE_MENU_ELEMENTS);Array.isArray(e)||(e=Wt());let t=e.length-1;for(;t>=0&&e[t].element==D.Separator;)e.splice(t,1),t--;for(;e[0].element==D.Separator;)e.splice(0,1);let n=0;for(;n<e.length-1;){for(;e[n].element==D.Separator&&e[n+1].element==D.Separator;)e.splice(n+1,1);n++}X.set(N.PROFILE_MENU_ELEMENTS,e)}B.addStyle(mi.A);const wi=new he("Reddit++ Settings",Si,bi);class ae{}ae.APIRequests={text:"API requests",color:"var(--shreddit-color-wordmark)",link:"https://github.com/lnm95/redditPlusPlus/blob/main/redditAPI.md"},ae.New={text:"New",color:"#2C96C4",link:"https://greasyfork.org/en/scripts/490046-reddit/versions"};let Re=new Lt;function Si(e,t){document.body.click(),Re.Reset(),Re.RenderBanner(e.content);const n=d(e.content,"div",["pp_window_scrollContent","styled-scrollbars"]),o=d(n,"div","pp_window_elementsContainer");f("App name","Without authorization API requests will be limited by 100 per 10 minutes","Unauthorized",h.API_APP,[ae.APIRequests]),c("Show the requests limit warnings",null,h.API_WARNINGS,[ae.APIRequests]),s("Common"),c("Wide mode","Make focus on the content by replacing the right sidebar to screen border",h.WIDE_MODE),f("Content width","Width of the feed and comments in pixels",h.CONTENT_WIDTH.defaultValue,h.CONTENT_WIDTH),f("Content offset","Offset of the feed and comments in pixels",h.CONTENT_OFFSET.defaultValue,h.CONTENT_OFFSET),c("Custom fonts","Adjust font sizes for better readability",h.BIGGER_FONTS),f("Content font size","Comment and post text. Default (reddit): 14px",h.BIGGER_FONTS_CONTENT_SIZE.defaultValue,h.BIGGER_FONTS_CONTENT_SIZE),f("UI element font size","Headings, ratings, and buttons next to content. Default (reddit): 12px",h.BIGGER_FONTS_OTHER_SIZE.defaultValue,h.BIGGER_FONTS_OTHER_SIZE),a("Profile menu","Hide and replace profile menu elements",gi,[ae.New]),c("Scroll to top button",null,h.SCROLL_TO_TOP),c("Image viewer","Open (zoom) images instead default redirect behaviour",h.IMAGE_VIEWER),g("Redirect","Special behaviour when you visit old.reddit pages",h.REDIRECT_MODE),g("Awards","Collapse the award's button for none upvoted posts and comments or remove completely",h.COLLAPSE_AWARDS),s("Content"),a("Filters","Hide posts and comments by regular expressions",ui),c("Hidden posts history","Allows to show latest hidden posts",h.SHOW_FILTERED_CONTENT),f("Hidden posts history limit","Max count of posts in history window",h.FILTERED_CONTENT_MAX_COUNT.defaultValue,h.FILTERED_CONTENT_MAX_COUNT),s("Users"),c("User info",`Show user's karma and "new user" mark`,h.USER_INFO,[ae.APIRequests]),g("Nickname mode","Allows showing a nickname instead of the profile name",h.USERNAME_MODE,[ae.APIRequests,ae.New]),f("Nickname max symbols","Make nicknames with too many symbols shorter",h.USERNAME_MAX_SIMBOLS.defaultValue,h.USERNAME_MAX_SIMBOLS),c("User tags","Enable custom tags (sets via comment's context menu)",h.USER_TAGS),s("Feed"),c("Feed buttons","Unwrap feed sorting buttons",h.FEED_BUTTONS),c("Flairs bar","Display available flairs to faster navigation. Specific flairs may be hidden via subreddit's flairs settings",h.FLAIR_BAR),c("Show flairs always","Show flairs for posts in specific feeds (Home, Popular and All) and filter posts by flairs.",h.FLAIR_SHOW_ALWAYS,[ae.APIRequests]),c("Collapse community highlights",null,h.COLLAPSE_HIGHLIGHTS),c("Selectable text","Make a text selectable when posts viewed in feed",h.SELECTABLE_POSTS),c("Unwrap button","Show the unwrap button for long-text posts in feed",h.UNWRAP_POST),c("Soft background","Make the background of posts with soft gradient color",h.BACKPLATES),c("Show post's author","Relates to Home, Popular and All feeds",h.SHOW_POST_AUTHOR),g("Save-post bookmarks","Show the save bookmark next to the vote buttons",h.SAVED_BOOKMARK_POSTS),s("Comments"),c("Sort buttons","Unwrap the comment's sort buttons",h.COMMENTS_SORT_BUTTONS),c("Remember sort","Remember latest used comment's sort",h.COMMENTS_REMEMBER_SORT),c('Unwrap "more replies"',"Automatically unwrap more replies when it becomes visible",h.UNWRAP_MORE_REPLIES),c("Hide share button","Replace the share button to comment's context menu",h.HIDE_SHARE),c("Ghosted comments","Make comments ghosted when comment's rating below zero",h.GHOSTED_COMMENTS),c("Collapse unwanted","Automatic collapse all automoderator and mod's pinned comments",h.COLLAPSE_AUTOMODERATOR),g("Save-comment bookmarks","Show the save bookmark next to the vote buttons",h.SAVED_BOOKMARK_COMMENTS),c("Hide related posts",null,h.HIDE_RELATED_POSTS);function s(u){const p=d(o,"h3","pp_settings_subtittle");p.textContent=u}function r(u,p,S=[]){const C=d(o,"div","pp_window_element"),M=d(C,"div","pp_settings_propertyHeader"),L=d(M,"div","pp_settings_propertyHeader_tittle");if(L.textContent=u,p!=null){const T=d(M,"div","pp_settings_propertyHeader_description");T.textContent=p}else C.classList.add("pp_settings_property_oneLine");for(const T of S){const P=d(L,"a","pp_no_decoration");T.link!=null&&T.link.length>0&&P.setAttribute("href",T.link);const H=d(P,"div",["pp_settings_propertyHeader_badge","pp_no_decoration"]);H.textContent=T.text,H.style.color=T.color,H.style.borderColor=T.color}return d(C,"div","pp_settings_propertyButtonContainer")}function a(u,p,S,C=[]){const M=r(u,p,C),L=d(M,"div","pp_window_controlArea"),O=d(L,"div",["pp_ui_options_arrow","button","button-plain","button-medium","px-[var(--rem8)]"]),T=W(ft(),20,20);O.append(T),M.parentElement.style.cursor="pointer",M.parentElement.addEventListener("click",()=>{S.open()})}function c(u,p,S,C=[]){const M=r(u,p,C),L=d(M,"div","pp_window_controlArea"),O=Re.CreateSource(S.isEnabled());ne(L,S.isEnabled(),T=>{S.switch(T),O.Capture(S.isEnabled())})}function g(u,p,S,C=[]){const M=r(u,p,C),L=d(M,"div","pp_window_controlArea"),O=Re.CreateSource(S.getIndex());Je(L,S.getIndex(),S.values,T=>{S.set(T),O.Capture(S.getIndex())})}function f(u,p,S,C,M=[]){const L=r(u,p,M),O=d(L,"div","pp_window_controlArea"),T=Re.CreateSource(C.get());Pt(O,S,C.get(),P=>{C.set(P),T.Capture(C.get())},{alignCenter:!0,filter:C.filter})}}function bi(){Re.HasChanges()&&(h.nextRevision(),window.location.reload())}var Ci=_("./src/modules/profileMenu/profileMenu.less");B.addStyle(Ci.A);var D;(function(e){e[e.Separator=0]="Separator",e[e.VeiwProfile=1]="VeiwProfile",e[e.EditAvatar=2]="EditAvatar",e[e.Drafts=3]="Drafts",e[e.Achievements=4]="Achievements",e[e.Earn=5]="Earn",e[e.Premium=6]="Premium",e[e.DarkMode=7]="DarkMode",e[e.LogOut=8]="LogOut",e[e.Advertise=9]="Advertise",e[e.RedditPro=10]="RedditPro",e[e.Settings=11]="Settings",e[e.PlusPlus=12]="PlusPlus"})(D||(D={}));const Ut=new Map([[D.VeiwProfile,{tittle:"View Profile",isOptional:!1,find:e=>e.querySelector('faceplate-tracker[noun="profile"]')}],[D.EditAvatar,{tittle:"Edit Avatar",isOptional:!0,find:e=>e.querySelector('faceplate-tracker[noun="edit_avatar"]')}],[D.Drafts,{tittle:"Drafts",isOptional:!0,find:e=>e.querySelector("#drafts-list-item")}],[D.Achievements,{tittle:"Achievements",isOptional:!0,find:e=>e.querySelector('faceplate-tracker[source="achievements"]')}],[D.Earn,{tittle:"Earn",isOptional:!0,find:e=>e.querySelector('faceplate-tracker[source="earn"]')}],[D.Premium,{tittle:"Premium",isOptional:!0,find:e=>e.querySelector('faceplate-tracker[noun="premium_menu"]')}],[D.DarkMode,{tittle:"Dark Mode",isOptional:!0,find:e=>e.querySelector("shreddit-darkmode-setter")}],[D.LogOut,{tittle:"Log Out",isOptional:!1,find:e=>e.querySelector("user-drawer-logout")}],[D.Advertise,{tittle:"Advertise on Reddit",isOptional:!0,find:e=>e.querySelector('faceplate-tracker[noun="advertise"]')}],[D.RedditPro,{tittle:"Try Reddit Pro",isOptional:!0,find:e=>e.querySelector('faceplate-tracker[noun="try_reddit_pro"]')}],[D.Settings,{tittle:"Settings",isOptional:!1,find:e=>e.querySelector('faceplate-tracker[noun="settings"]')}],[D.PlusPlus,{tittle:"Reddit++",isOptional:!1,find:e=>e.querySelector('faceplate-tracker[noun="pp-settings"]')}]]),xi=Array(D.VeiwProfile,D.EditAvatar,D.Drafts,D.Achievements,D.Earn,D.Premium,D.DarkMode,D.LogOut,D.Separator,D.Advertise,D.RedditPro,D.Separator,D.Settings,D.PlusPlus);function Wt(){const e=new Array;for(const t of xi)e.push({element:t,hidden:!1});return e}let at=null,ze=null;function Nn(){let e=document.getElementById("user-drawer-content");if(e.classList.toggle("pp_defaultText",!0),at==null){yi(e);const r=Object.values(D);at=new Map,ze=new Array,e.querySelectorAll("ul").forEach(a=>{for(const c of[...r]){const g=Ut.get(c)?.find,f=g!=null?g(a):null;f&&(at.set(c,f),f.remove(),r.splice(r.indexOf(c),1))}for(const c of a.children)ze.push(c);a.remove()}),e.querySelectorAll("hr").forEach(a=>a.remove())}else e.querySelectorAll("ul").forEach(r=>r.remove()),e.querySelectorAll("hr").forEach(r=>r.remove());let t=X.get(N.PROFILE_MENU_ELEMENTS);if(Array.isArray(t)||(t=Wt()),ze.length>0){Ce(`Detected ${ze.length} undefined elements in the Profile menu`);const r=o();for(const a of ze)r.append(a);s()}let n=o();for(const r of t)if(!r.hidden)if(r.element==D.Separator)s(),n=o();else{const a=at.get(r.element);a&&n.append(a)}function o(){return d(e,"ul",["w-100","p-0","m-0","list-none","my-xs"])}function s(){d(e,"hr",["h-px","w-100","bg-neutral-border-weak","border-0"])}}function yi(e){let t=e.querySelector('faceplate-tracker[noun="settings"]');t==null&&(t=e.querySelector('faceplate-tracker[noun="login"]'));let n=t.cloneNode(!0);n.setAttribute("noun","pp-settings"),t.parentNode.appendChild(n),n.querySelector("a").removeAttribute("href");const o=n.querySelector("svg"),s=W(ri(),20,20,{strokeColor:z});o.replaceWith(s);let r=n.querySelector(".text-14");r.textContent="Reddit++",n.addEventListener("click",()=>{wi.open()})}B.addStyle(ti.A);let Fn=!1;async function Kn(e){const t=await A(()=>e.querySelector("reddit-header-large")?.querySelector("nav"));if($(t))return;const n=await A(()=>t.querySelector('span[data-part="inbox"]')?.parentElement?.parentElement);n.classList.add("pp_userPanel"),n.addEventListener("click",()=>{Nn()},{once:!0}),h.NOTIFY_POPUP.isEnabled()&&!Fn&&(Fn=!0,Ie("HEADER",document.body,r=>{r.getAttribute("data-id")=="notification-container-element"&&!$(r)&&oi(r)}));const o=e.querySelector("#reddit-logo"),s=d(o,"div","pp_logo");s.textContent="++"}var Ai=_("./src/modules/redirect.less");function Oi(){const e=h.REDIRECT_MODE.get(),t=window.location.href.includes("old.reddit.com");let n=null;t&&(n=window.location.href.replace("old.reddit.com","reddit.com")),e==de.Forced&&n!=null&&window.location.assign(n),e==de.Suggestion&&n!=null&&Ti(n);const o=On();return n!=null||o}function Ti(e){B.addStyle(Ai.A);let t=19;const n=d(document.body,"div","pp_redirectContainer"),o=d(n,"div","pp_redirectBox");o.textContent=`Click here to redirect on compatible page (${t})`,o.addEventListener("click",()=>{window.location.assign(e)});const s=setInterval(()=>{t--,o.textContent=`Click here to redirect on compatible page (${t})`,t<=0&&(clearInterval(s),n.remove())},750)}var Li=_("./src/modules/scrollToTop.less"),Bi=_("./resources/scrollButton.svg"),Mi=_.n(Bi);const Ri=1e3;let oe=null,jt=null,ve=0,le=!1,Nt=null,Hn=null;const Vn=new MutationObserver(()=>{Kt(()=>{De()},.5)});async function Gn(){if(h.SCROLL_TO_TOP.isDisabled())return;B.addStyle(Li.A,"scrollToTop"),Nt=await A(()=>document.body.querySelector(".main-container"));const e=Nt.parentElement,t=await A(()=>document.body.querySelector("#left-sidebar-container"));if(oe==null){window.addEventListener("resize",()=>{De()});let o=!1;window.addEventListener("scroll",()=>{le=window.scrollY>Ri,le!=o&&(o=le,De())})}else oe.remove(),Vn.disconnect(),ve=0,le=!1;Vn.observe(t,{childList:!1,subtree:!1,attributes:!0}),Hn=t.querySelector("#flex-left-nav-contents");const n=t.querySelector("#flex-nav-buttons");n?.addEventListener("click",o=>{Kt(()=>{De()},.5)}),oe=d(e.parentElement,"div","pp_scrollToTop"),jt=W(Mi(),40,40),oe.append(jt),oe.addEventListener("click",()=>{le?(ve=window.scrollY,window.scrollTo({top:0,behavior:"smooth"}),le=!1):ve>0&&(window.scrollTo({top:ve,behavior:"smooth"}),ve=0,le=!0),De()}),De()}let qn=!0;function De(){const e=Hn?.getBoundingClientRect()?.right??0,t=Nt.getBoundingClientRect().left,n=t-e,o=60,s=100,r=80;let a=s,c=(e+t)/2-a/2;n>=r+40?(a=Math.min(s,n-20),c=(e+t)/2-a/2):n>=o?(a=Math.max(o,n-10),c=(e+t)/2-a/2):n>=40&&n<o?(a=Math.max(40,n-5),c=e+(n-a)/2):(a=60,c=e-30,oe.style.opacity="0.7"),oe.style.width=`${a}px`,oe.style.left=`${c}px`,n>=40&&(oe.style.opacity=""),qn=document.documentElement.scrollHeight>window.innerHeight&&(le||ve>0)&&n>=30;const f=!le&&ve>0;oe.classList.toggle("pp_hidden",!qn),jt.classList.toggle("pp_scrollToTop_inverted",f)}Di();async function Di(){const e=await A(()=>document.head!=null&&document.body!=null?document.body:null);let t=document.head.querySelector('meta[name="reddit-plus-plus"]');if(t!=null){fe("Reddit++ ran more than once. Check out the userscript manager to disable dublicates.",{seconds:10});return}if(t=document.createElement("meta"),t.setAttribute("name","reddit-plus-plus"),t.setAttribute("version","1.2.2"),document.head.append(t),Us.check(),Oi())return;Ts();const n=await A(()=>e.querySelector("shreddit-app"),E);if(n==null||n.getAttribute("devicetype")!="desktop"){Ce("Reddit++ was stopped for a non compatible page");return}Kn(e),Pn(),Gn(),Ie("CORE",e,o=>{o.matches("reddit-header-large")==!0&&Kn(o.parentElement);const s=o.matches("shreddit-app")==!0,r=o.classList.contains("grid-container")&&o.parentElement.matches("shreddit-app")==!0;(s||r)&&(Pn(),Gn(),On())})}})()})();
