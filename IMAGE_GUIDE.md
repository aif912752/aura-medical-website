# คำแนะนำการหารูปภาพสำหรับเว็บไซต์ Aura Medical

## รูปภาพปัจจุบัน (ใช้งานได้ทันที)

เว็บไซต์ตอนนี้ใช้รูปภาพจาก Unsplash ซึ่งเป็นรูปภาพฟรีสำหรับการใช้งานเชิงพาณิชย์
สามารถใช้งานได้ทันที ไม่ต้องเปลี่ยนแปลง

## ถ้าต้องการเปลี่ยนเป็นรูปภาพของคลินิกจริง

### 1. AI Image Generation Tools (แนะนำ)

#### Midjourney (ดีที่สุดสำหรับรูปคน)
- เหมาะสำหรับ: สร้างรูปคนสวย, รูปแพทย์, รูปลูกค้า
- ราคา: $10-30/เดือน
- Prompt แนะนำ:
  - "Professional female dermatologist in modern clinic, soft lighting, medical aesthetic, high quality"
  - "Beautiful woman with glowing skin, skincare treatment, professional photography"

#### DALL-E 3 / ChatGPT Plus
- เหมาะสำหรับ: รูปสถานที่, รูปอุปกรณ์แพทย์
- ราคา: $20/เดือน (ChatGPT Plus)
- ใช้ผ่าน ChatGPT ได้เลย

#### Leonardo.ai (ฟรี + ถูก)
- เหมาะสำหรับ: รูปทั่วไป, รูปผิวหน้า
- ราคา: ฟรี 150 credits/วัน
- เหมาะกับผู้เริ่มต้น

#### Stable Diffusion (ฟรี 100%)
- เหมาะสำหรับ: ทุกประเภท แต่ต้องติดตั้งเอง
- ราคา: ฟรี (ต้องมี GPU card)

### 2. Stock Photo Websites (ฟรี)

#### Unsplash (ใช้อยู่ตอนนี้)
- ข้อดี: ฟรี 100%, คุณภาพสูง, ไม่ต้องลงทะเบียน
- URL: https://unsplash.com

#### Pexels
- ข้อดี: ฟรี 100%, มีวิดีโอด้วย
- URL: https://pexels.com

#### Pixabay
- ข้อดี: ฟรี 100%, มีรูปเยอะมาก
- URL: https://pixabay.com

### 3. Stock Photo (แบบเสียเงิน)

#### Shutterstock
- ข้อดี: รูปสวย, หลากหลาย, มีรูปแพทย์จริง
- ราคา: ~$29/เดือน

#### Getty Images
- ข้อดี: รูปคุณภาพสูงมาก, มีรูปแพทย์/คลินิกจริง
- ราคา: ~$50+ /รูป

## วิธีเปลี่ยนรูปภาพในเว็บ

### 1. Hero Section (รูปหลัก)
ไฟล์: `index.html` บรรทัดที่ 41
```html
<img src="URL_RUUP_NGEE_JA" alt="..." class="hero-bg-img">
```

### 2. Service Cards (6 รูป)
ไฟล์: `index.html` บรรทัดที่ 100-135
แก้ไข `style="background-image: url('URL_RUUP_JA')"`

### 3. About Section
ไฟล์: `index.html` บรรทัดที่ 81
```html
<img src="URL_RUUP_JA" alt="..." class="about-img-real">
```

### 4. Doctor Section
ไฟล์: `index.html` บรรทัดที่ 227
```html
<img src="URL_RUUP_JA" alt="Doctor" class="doctor-img-real">
```

### 5. Testimonials (3 รูป)
ไฟล์: `index.html` บรรทัดที่ 260, 275, 290
```html
<img src="URL_RUUP_JA" alt="Customer" class="author-avatar-img">
```

### 6. Gallery (6 รูป)
ไฟล์: `index.html` บรรทัดที่ 312-345
```html
<img src="URL_RUUP_JA" alt="..." class="gallery-img-real">
```

## Tips สำหรับการเลือกรูปภาพ

1. **ขนาดรูปที่เหมาะสม**
   - Hero: 1200x1600px (แนวตั้ง)
   - Service Cards: 800x600px (แนวนอน)
   - Gallery: 800x800px (จัตุรัส)

2. **ความเร็วในการโหลด**
   - ใช้รูปที่มีขนาดไม่เกิน 500KB
   - ใช้ format: WebP > JPG > PNG

3. **ความรู้สึกของรูป**
   - ใช้โทนสีที่ตรงกับ brand (Sage Green, Soft Pink, Rose Gold)
   - ควรมี lighting สว่าง สดใส
   - หลีกเลี่ยงรูปมืดหรือน่ากลัว

## Prompt แนะนำสำหรับ AI Generation

### สำหรับ Hero Image
```
Professional portrait of confident beautiful woman with glowing healthy skin,
standing in modern aesthetic clinic background, soft natural lighting,
pastel color palette, sage green and soft pink tones,
high quality photography, commercial use
```

### สำหรับ Doctor
```
Professional female dermatologist in white coat, modern medical clinic,
warm smile, trustworthy appearance, professional photography,
soft lighting, medical aesthetic environment
```

### สำหรับ Services
```
Close-up of aesthetic treatment result, glowing skin, professional photography,
bright and clean, medical spa environment, high quality
```

---

**หมายเหตุ:** รูปภาพ Unsplash ที่ใช้อยู่ตอนนี้สามารถใช้งานได้ทันที ไม่ต้องเปลี่ยนถ้าไม่ต้องการ
