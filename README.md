
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
| Group Routing      | `(admin)` | organize routes by category or team                     |
| Parallel Routing   | `@modal` | render one or more pages within the same layout          |
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

### 🧑🏻‍💼 Admin Dashboard
| Lesson             | Folder   | Description                                              |
| ------------------ | -------- | -------------------------------------------------------- |
| Admin dashboard    | `(admin)/dashboard`| datatable and sidebar using react datatable and shadcn   |
| Data Table    | `(admin)/payment`| datatable using shadcn datatable                 |
| Area Chart         | `(admin)/home`| Area Chart with raw data                            |

### 🗳️ Additional Files
| Lesson             | Folder   | Description                                              |
| ------------------ | -------- | -------------------------------------------------------- |
| robots.txt   | `/robots.txt`| tells search engines where should and should NOT to go.    |
| sitemap.ts   | `/sitemap.ts`| tells search engines what to look at                   |

## About sitemap

Each object in the array represents one page (URL) in your website's sitemap.

Let’s explain the keys:

| Key              | Description |
|------------------|-------------|
| `url`            | The full URL of the page. |
| `lastModified`   | Tells search engines when the page was last updated. `new Date()` sets it to the current date/time. |
| `changeFrequency`| Suggests how often this page changes: values like `'daily'`, `'weekly'`, `'monthly'`, `'yearly'`, etc. |
| `priority`       | A number from `0.0` to `1.0` that suggests the importance of the page. `1.0` = highest priority. |

---

### 🗺️ What This Does

When this function is used in Next.js under the `app` directory (like `app/sitemap.ts`), Next.js **automatically serves the sitemap at `/sitemap.xml`** during build or runtime. It generates the proper XML structure behind the scenes.

---

### ✅ Example Use Case

| Page            | Frequency | Priority |
|-----------------|-----------|----------|
| `/` (Home)      | Yearly    | 1.0      |
| `/product`        | Weekly   | 0.8      |
| `/user`         | Monthly    | 0.7      |
| `/about`         | Weekly    | 0.5      |

This tells search engines:
- "Home doesn’t change often, but it’s important."
- "Product updates regularly, so check it more frequently."

---

### 🛠️ When to Use

Use this `sitemap.ts` file when:
- You want **Next.js to generate a sitemap automatically**
- You want to give search engines hints on how to crawl your site

---
