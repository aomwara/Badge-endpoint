# Shield.io Badge Endpoint (Extension)
เนื่องจาก Shield.io custom logo bagde ยาก ก็เลยทำ custom ใช้เองละกัน

## วิธีการใช้งาน
1. เปิดเว็บ https://shields.io/endpoint สำหรับ generate badge ด้วย endpoint
2. นำ URL endpoint ไปใส่
3. ดู preview
4. custom ตามความชอบ
5. copy มาใช้ได้เลย

## API Endpoint
1. ใส่ `APP_NAME` ตาม Application List ตามด้านล่าง
```
https://bagde-endpoint.vercel.app/api/{APP_NAME}
```
:: ตัวอย่าง ::
```
https://bagde-endpoint.vercel.app/api/truffle
https://bagde-endpoint.vercel.app/api/hardhat
https://bagde-endpoint.vercel.app/api/solidity
```

2. Custom APP ด้วย svg logo
```
https://badge-endpoint.vercel.app/api/custom?label={APP_NAME}&color={COLOR_CODE}&icon={SVG_URL_ENDPOINT}
```
:: ตัวอย่าง ::
```
https://bagde-endpoint.vercel.app/api/custom?label=google&color=00bfff&icon=https://url.com/logo-google.svg
```

---
## Application List
- truffle
- hardhat
- solidity
- chainlink
- web3.js
- ethers.js
- next.js
- chakra-ui

---
## Contributor
@I3acon @aomwara
