
# 🚀 Next.js Learning Project

This repository is a hands-on for my learning and practicing **Next.js** concepts through real code examples, organized by feature. Each folder represents a topic with a working implementation.

---

## 🛠️ Installation

Before starting, make sure you have **Node.js** installed (preferably v18 or higher).

### 1. Clone the repository:

```bash
git clone https://github.com/Vuthy-Tourn/nextjs-practice.git
cd nextjs-practice
```
### 2. Install Dependencies
```bash
npm install
```
Optional: SWR (for data fetching)
```bash
npm install swr
```

### 3. Start the Development Server
```bash
npm run dev
```
Visit http://localhost:3000 to view your project in the browser.

## 🎓 Learning Parts
### 📡 Fetching Data
| Lesson          | Folder    | Description                                                    |
| --------------- | --------- | -------------------------------------------------------------- |
| Client Fetching | `/user`    | Fetching data using `useEffect` from the client-side           |
| Server Fetching | `/product` | Using `getServerSideProps` or `getStaticProps` for prefetching |
| use Hook        | `/blog`    | Creating custom reusable React hooks for fetching data         |
| use SWR         | `/recipe`  | Implementing client-side fetching with caching using SWR       |
| useParams         | `/blog/${id}`  | read a route's dynamic params filled in by the current URL. |

### 🧭 Routing Features
| Lesson             | Folder   | Description                                              |
| ------------------ | -------- | -------------------------------------------------------- |
| Intercepting Route | `/photos` | Using intercepting and parallel routes with route groups |


### 🛠️ Fonts
| Lesson             | Folder   | Description                                              |
| ------------------ | -------- | -------------------------------------------------------- |
| Two fonts and languages| `/`      | Local font and Google font (Khmer and English)       |

### 🪢 Dynamic MetaData
| Lesson             | Folder   | Description                                              |
| ------------------ | -------- | -------------------------------------------------------- |
| dynamic MetaData   | `/product/{id}`| Dynamic by the each product `id`                   |
| dynamic MetaData   | `/user/{id}`| Dynamic by the each user `id`                   |
