# Gym Management Backend – API Flow Documentation

## 1. Project Overview

Ye backend ek **Gym / Fitness Business Management System** ke liye banaya gaya hai.

Isme main users:

- **Super Admin**
- **Admin / Gym Owner**
- **Members**
- **Staff**

hain.

Admin apne gym ka business manage karta hai:
- Members
- Membership Plans
- Member Memberships
- Member Payments / Collections
- Staff
- Staff Attendance
- Dashboard
- Reports
- Admin Subscription

> Important: Admin dashboard ke andar **member payments ke liye koi external payment gateway required nahi hai**. Cash, UPI, Card, Bank Transfer jaise payment methods manually record kiye ja sakte hain.

---

# 2. Authentication Flow

Admin login ke baad JWT access token generate hota hai.

Authentication middleware:

```text
authMiddleware
    ↓
Cookie se accessToken
    ↓
JWT verify
    ↓
req.user = {
    id,
    role,
    username
}
    ↓
Next middleware / controller
```

Role middleware allowed roles check karta hai:

```text
authMiddleware
    ↓
roleMiddleware("ADMIN")
    ↓
Controller
```

Agar token missing ho:

```text
401 Authentication required
```

Agar token invalid/expired ho:

```text
401 Invalid or expired token
```

Agar role allowed nahi ho:

```text
403 Access denied
```

---

# 3. Admin Dashboard Flow

Admin login ke baad Dashboard APIs ka use karke overall gym ka data dikhaya ja sakta hai.

Dashboard me generally:

- Total Members
- Active Members
- Inactive Members
- Total Staff
- Active Staff
- Today's Attendance
- Active Memberships
- Expiring Memberships
- Total Collection
- Recent Payments

jaise statistics show kiye ja sakte hain.

Flow:

```text
Admin Login
    ↓
JWT Authentication
    ↓
Dashboard API
    ↓
Members + Memberships + Payments + Staff + Attendance
    ↓
Dashboard Summary
```

---

# 4. Admin Profile / Business Flow

Admin ke paas ek Business profile hoti hai.

Business information:

- Business Name
- Business Type
- Mobile Number
- Email
- Address
- City
- State
- Pincode

Flow:

```text
Admin
  ↓
Business Profile
  ↓
Create / Get / Update
```

Business `User` ke saath one-to-one relation me hai.

---

# 5. Member Management APIs

Member gym ka actual customer hai.

Member ke basic details:

- Name
- Mobile Number
- Email
- Gender
- Date of Birth
- Address
- City
- State
- Pincode
- Status

Status:

```text
ACTIVE
INACTIVE
SUSPENDED
```

Har Member ek Admin se linked hai.

Relationship:

```text
Admin
  |
  └── Members
        ├── Member 1
        ├── Member 2
        └── Member 3
```

Important:

Ek admin dusre admin ke members ko access nahi karna chahiye.

Isliye APIs me:

```text
req.user.id === member.adminId
```

type ownership check hona chahiye.

---

# 6. Membership Plan Flow

Membership Plan wo plan hai jo Admin pehle se create karke rakhta hai.

Example:

```text
Basic
₹999
30 Days

Premium
₹1999
90 Days

Annual
₹9999
365 Days
```

Membership Plan fields:

- Name
- Description
- Price
- Duration in Days
- Features
- Status

Status:

```text
ACTIVE
INACTIVE
```

Relationship:

```text
Admin
  |
  └── Membership Plans
        ├── Basic
        ├── Premium
        └── Annual
```

## Membership Plan ka main purpose

Admin ko har member ke liye manually plan details enter nahi karni padti.

Admin pehle:

```text
Create Membership Plan
```

karta hai.

Baad me member ko membership assign karte waqt:

```text
membershipPlanId
```

send kiya jata hai.

---

# 7. Member Membership Flow

Member add karne ke baad us member par Admin ka existing Membership Plan apply kiya ja sakta hai.

Example:

```text
Member:
Rahul Sharma

Plan:
Premium

Price:
₹1999

Duration:
90 Days
```

Backend flow:

```text
Member
  ↓
Select Membership Plan
  ↓
membershipPlanId
  ↓
Membership create
  ↓
Plan ki price copy
  ↓
Start Date
  ↓
Duration ke according End Date
  ↓
Membership ACTIVE
```

Membership table me important information save hoti hai:

- memberId
- membershipPlanId
- membershipName
- amount
- startDate
- endDate
- status

### Important Design

Membership create hone ke time plan ki current:

```text
name
price
duration
```

membership me snapshot ke form me save ki ja sakti hai.

Iska benefit:

Agar future me Admin plan ka price change kare, purani membership ka amount automatically change nahi hoga.

---

# 8. Member Payment / Collection Flow

Ye section gym ke actual customer payments ko manage karta hai.

Isme external payment gateway ki requirement nahi hai.

Payment methods:

```text
CASH
UPI
CARD
BANK_TRANSFER
ONLINE
```

Admin manually payment record kar sakta hai.

Example:

```text
Member:
Rahul

Membership:
Premium

Amount:
1999

Payment Method:
UPI

Status:
SUCCESS
```

Flow:

```text
Member
  ↓
Membership
  ↓
Payment / Collection
  ↓
Amount
  ↓
Payment Method
  ↓
Payment Status
  ↓
Payment Record
```

`MemberPayment` me:

- adminId
- memberId
- membershipId
- amount
- currency
- paymentMethod
- status
- transactionId
- notes
- paidAt

save hota hai.

---

# 9. Member Payment Summary

Payment summary API ka purpose Admin ko collection ka overview dena hai.

Example:

```text
/api/v1/admin/member-payments/summary
```

Summary me business logic ke according:

- Total Collection
- Successful Payments
- Pending Payments
- Failed Payments
- Payment Count
- Payment Method wise collection

jaise data diya ja sakta hai.

Flow:

```text
Admin
  ↓
Member Payment Summary
  ↓
Admin ke payments filter
  ↓
Database aggregation
  ↓
Collection Summary
```

Important:

Admin ko sirf **apne adminId** ke payments dikhne chahiye.

---

# 10. Staff Management Flow

Staff gym ke employees hain.

Staff ka purpose mainly:

```text
Attendance Management
```

hai.

Staff login system required nahi hai.

Isliye:

```text
username = NULL
passwordHash = NULL
```

allowed hai.

Staff types:

```text
TRAINER
RECEPTIONIST
CLEANER
MANAGER
ACCOUNTANT
SECURITY
OTHER
```

Staff status:

```text
ACTIVE
INACTIVE
```

Staff fields:

- Name
- Mobile Number
- Email
- Staff Type
- Designation
- Address
- City
- State
- Pincode
- Status

Relationship:

```text
Admin
  |
  └── Staff
        ├── Trainer
        ├── Receptionist
        ├── Cleaner
        └── Security
```

---

# 11. Staff Attendance Flow

Attendance staff ke liye hai.

Attendance statuses:

```text
PRESENT
ABSENT
HALF_DAY
LATE
LEAVE
```

Attendance record me:

- adminId
- staffId
- attendanceDate
- checkIn
- checkOut
- status
- notes

save hote hain.

Flow:

```text
Admin
  ↓
Select Staff
  ↓
Select Date
  ↓
Attendance Status
  ↓
Check In / Check Out
  ↓
Save Attendance
```

Database me:

```text
@@unique([staffId, attendanceDate])
```

hai.

Iska matlab:

**Ek staff ke liye same date par duplicate attendance record nahi banana chahiye.**

Example:

```text
Rahul
2026-08-25
PRESENT
09:00 AM
06:00 PM
```

---

# 12. Attendance Business Rule

Attendance create karte waqt backend ko verify karna chahiye:

```text
1. Staff exist karta hai?
2. Staff current Admin ka hai?
3. Same date ka attendance already exist karta hai?
4. Agar exist karta hai to duplicate create na kare.
```

Ownership:

```text
staff.adminId === req.user.id
```

hona chahiye.

---

# 13. Reports APIs Flow

Reports APIs ka purpose Admin ko gym ka historical/summary data dena hai.

Reports me different data sources combine ho sakte hain:

```text
Members
Memberships
Payments
Staff
Attendance
```

Example reports:

### Member Report

```text
Total Members
Active Members
Inactive Members
New Members
```

### Membership Report

```text
Active Memberships
Expired Memberships
Cancelled Memberships
Expiring Memberships
```

### Collection Report

```text
Total Collection
Payment Count
Payment Method Wise Collection
Date Wise Collection
```

### Staff Attendance Report

```text
Present
Absent
Half Day
Late
Leave
```

Flow:

```text
Admin
  ↓
Reports API
  ↓
Date / Filter
  ↓
Database Query
  ↓
Report Summary
```

---

# 14. Admin Subscription Flow

Admin Subscription gym owner ke SaaS plan ke liye hai.

Ye **Member Membership** se different hai.

## Admin Subscription

```text
Admin
  ↓
SaaS Plan
  ↓
Subscription
```

## Member Membership

```text
Gym Member
  ↓
Gym Membership Plan
  ↓
Membership
```

Dono ko mix nahi karna hai.

---

# 15. Admin Subscription vs Member Membership

| Feature | Admin Subscription | Member Membership |
|---|---|---|
| Kis ke liye | Admin / Gym Owner | Gym Member |
| Purpose | Software subscription | Gym membership |
| Model | Subscription | Membership |
| Plan | Plan | MembershipPlan |
| Payment | SaaS payment | Gym collection |
| Gateway | Project configuration par depend | Required nahi |
| Duration | SaaS plan duration | Gym membership duration |

---

# 16. Complete End-to-End Flow

Complete system ka main flow:

```text
SUPER ADMIN
     |
     | creates / manages
     ↓
ADMIN
     |
     ├── Business Profile
     |
     ├── Admin Subscription
     |
     ├── Membership Plans
     |       |
     |       ├── Basic
     |       ├── Premium
     |       └── Annual
     |
     ├── Members
     |       |
     |       ├── Member 1
     |       ├── Member 2
     |       └── Member 3
     |               |
     |               ↓
     |         Membership
     |               |
     |               ↓
     |         Member Payment
     |
     ├── Staff
     |       |
     |       ├── Trainer
     |       ├── Receptionist
     |       └── Cleaner
     |               |
     |               ↓
     |          Attendance
     |
     ├── Dashboard
     |
     └── Reports
```

---

# 17. Recommended API Sequence

New Admin ke liye practical sequence:

```text
1. Admin Login
       ↓
2. Get Admin Profile
       ↓
3. Create / Update Business
       ↓
4. Check Admin Subscription
       ↓
5. Create Membership Plans
       ↓
6. Create Members
       ↓
7. Apply Membership Plan to Member
       ↓
8. Record Member Payment
       ↓
9. Create Staff
       ↓
10. Mark Staff Attendance
       ↓
11. Dashboard
       ↓
12. Reports
```

---

# 18. Security / Ownership Rule

Har Admin API me current logged-in Admin ka ID:

```text
req.user.id
```

use karna important hai.

Example:

```text
GET members
```

me directly saare members nahi lene chahiye.

Correct:

```text
WHERE adminId = req.user.id
```

Same rule:

```text
Members
Membership Plans
Member Payments
Staff
Staff Attendance
Business
Reports
```

sab par apply hona chahiye.

---

# 19. Important IDs

System me different IDs ka role:

```text
adminId
    ↓
Admin / User ki ID

memberId
    ↓
Gym member ki ID

membershipPlanId
    ↓
Admin ke predefined membership plan ki ID

membershipId
    ↓
Kisi specific member par applied membership ki ID

staffId
    ↓
Staff ki ID

attendanceId
    ↓
Staff attendance record ki ID

memberPaymentId
    ↓
Member payment / collection record ki ID
```

---

# 20. Database Relationship Summary

```text
User (Admin)
 |
 ├── Business (1:1)
 |
 ├── Members (1:N)
 |     |
 |     ├── Memberships (1:N)
 |     |      |
 |     |      └── MembershipPlan
 |     |
 |     └── MemberPayments (1:N)
 |
 ├── MembershipPlans (1:N)
 |
 ├── Staff (1:N)
 |     |
 |     └── StaffAttendance (1:N)
 |
 └── MemberPayments (1:N)
```

---

# 21. Important Difference: Plan and Membership

Ye distinction bahut important hai.

### MembershipPlan

Admin ne pehle create kiya:

```text
Premium
₹1999
90 Days
```

Ye reusable template hai.

### Membership

Rahul ko Premium apply kiya:

```text
Rahul
Premium
₹1999
01 Aug → 29 Oct
ACTIVE
```

Ye actual member ka active membership record hai.

So:

```text
MembershipPlan = Template
Membership     = Applied Plan
```

---

# 22. Payment Architecture

Admin dashboard ke member collection section me:

```text
Member
   ↓
Membership
   ↓
MemberPayment
```

Use hota hai.

Example:

```text
Rahul
Premium Membership
₹1999
UPI
SUCCESS
```

Ye payment direct gym collection hai.

External gateway order/payment/signature fields ki requirement `MemberPayment` me nahi hai.

---

# 23. Final System Modules

Current backend ko modules me is tarah samjha ja sakta hai:

```text
AUTH
 ├── Login
 ├── JWT
 └── Role Protection

ADMIN
 ├── Dashboard
 ├── Profile
 ├── Business
 └── Subscription

MEMBERS
 ├── Create
 ├── List
 ├── Get
 ├── Update
 └── Status

MEMBERSHIP
 ├── Membership Plan CRUD
 ├── Apply Plan to Member
 ├── Active Membership
 ├── Expired Membership
 └── Cancel / Suspend

PAYMENTS
 ├── Create Collection
 ├── Payment List
 ├── Payment Details
 ├── Payment Summary
 └── Collection Reports

STAFF
 ├── Create Staff
 ├── List Staff
 ├── Get Staff
 ├── Update Staff
 └── Staff Status

ATTENDANCE
 ├── Mark Attendance
 ├── Update Attendance
 ├── Attendance List
 └── Attendance Reports

REPORTS
 ├── Member Reports
 ├── Membership Reports
 ├── Collection Reports
 └── Attendance Reports
```

---

# 24. Overall Request Flow

Har protected API ka common flow:

```text
Frontend / Postman
        ↓
HTTP Request
        ↓
Route
        ↓
authMiddleware
        ↓
roleMiddleware
        ↓
Controller
        ↓
Service
        ↓
Prisma
        ↓
MySQL
        ↓
Service Response
        ↓
Controller
        ↓
JSON Response
```

Example:

```text
POST /api/v1/admin/staff
        ↓
staff.routes.js
        ↓
authMiddleware
        ↓
roleMiddleware("ADMIN")
        ↓
staff.controller.js
        ↓
staff.service.js
        ↓
prisma.staff.create()
        ↓
MySQL
        ↓
Response
```

---

# 25. Postman Testing Order

Postman me APIs test karne ka recommended order:

### Step 1 – Login

Admin login karke access token/cookie obtain karo.

### Step 2 – Business

Business profile create/update karo.

### Step 3 – Membership Plans

Pehle plans create karo:

```text
Basic
Premium
Annual
```

### Step 4 – Member

Member create karo.

### Step 5 – Apply Membership

Member ko existing `membershipPlanId` assign karo.

### Step 6 – Payment

Us membership ka payment/collection record karo.

### Step 7 – Staff

Staff create karo.

Staff login credentials ki zarurat nahi hai.

### Step 8 – Attendance

Staff ki daily attendance mark karo.

### Step 9 – Dashboard

Dashboard summary verify karo.

### Step 10 – Reports

Date/filter ke saath reports verify karo.

---

# 26. Important Testing Cases

Backend test karte waqt ye cases zaroor check karo:

### Authentication

```text
No token → 401
Invalid token → 401
Expired token → 401
```

### Authorization

```text
Wrong role → 403
```

### Ownership

```text
Admin A
  ↓
Admin B ka member access
  ↓
Should fail
```

### Membership

```text
Inactive plan → membership apply nahi honi chahiye
Invalid membershipPlanId → error
Invalid memberId → error
```

### Payment

```text
Invalid member → error
Invalid membership → error
Wrong admin ownership → error
```

### Staff

```text
Invalid staffType → error
Wrong admin staff → error
Username/password → optional/null
```

### Attendance

```text
Invalid staff → error
Wrong admin staff → error
Same staff + same date → duplicate nahi
```

---

# 27. One-Line Business Flow

Pure application ko ek line me:

```text
Admin → Business → Membership Plans → Members → Apply Membership → Collect Payment → Staff → Attendance → Dashboard → Reports
```

Aur Admin ka SaaS side:

```text
Super Admin → Admin → Admin Subscription
```

---

# 28. Final Architecture

```text
                    ┌──────────────┐
                    │ Super Admin  │
                    └──────┬───────┘
                           │
                           ↓
                    ┌──────────────┐
                    │    Admin     │
                    └──────┬───────┘
                           │
          ┌────────────────┼────────────────┐
          ↓                ↓                ↓
      Business       Membership Plans     Staff
          │                │                │
          │                ↓                ↓
          │             Members        Attendance
          │                │
          │                ↓
          │           Membership
          │                │
          │                ↓
          │         Member Payment
          │
          └──────────────┬─────────────────┘
                         ↓
                    Dashboard
                         ↓
                      Reports
```

## Conclusion

Is backend ka main objective ek Admin ko complete gym operations manage karne dena hai.

Sabse important relationships:

```text
Admin
 ├── Members
 ├── Membership Plans
 ├── Staff
 ├── Member Payments
 └── Staff Attendance
```

Aur member side ka core flow:

```text
Member
  ↓
Membership Plan
  ↓
Membership
  ↓
Payment
```

Staff side ka core flow:

```text
Staff
  ↓
Attendance
```

Admin side ka core flow:

```text
Admin
  ↓
Business
  ↓
Admin Subscription
  ↓
Gym Management
```
