# 🎧 PodcastApp

A modern, responsive React application that allows users to browse, search, filter, and view detailed podcast show and episode information.

## 📦 Features

### ✅ Core Features

- **Browse Podcasts**  
  Users can view a grid of podcast previews with:

  - Cover image
  - Title
  - Number of seasons
  - Genres
  - Last updated info

- **Detailed Show Page**  
  Each podcast contains a detail view with:

  - Title, description, cover image
  - Genre tags
  - Last updated date
  - Total number of seasons and episodes
  - Dropdown to select a season
  - Season metadata and episode list
  - Season image and episode thumbnails
  - Shortened episode descriptions for quick scanning

- **Episode & Season Info**
  - Season description and title displayed clearly
  - Per-episode metadata including episode number, title, and summary

---

### 🔍 Search, Filter & Sort

- **Search by Title**  
  Live search bar to filter podcasts by name

- **Filter by Genre**  
  Users can filter podcasts based on genre (Technology, Business, etc.)

- **Sort Options**  
  Sort podcasts by:

  - Recent (default)
  - Oldest
  - Title A–Z
  - Title Z–A

- **Preserved Filter/Search State**  
  Filters and search terms persist even after navigating to a show and going back.

---

### 📄 Pagination

- Paginated podcast grid with **12 podcasts per page**
- Navigation buttons update the view and URL query parameters

---

### 📱 Responsive Design

- Fully responsive layout
- Season cover, episode images, and detail layouts adapt for:
  - Desktop
  - Tablets
  - Mobile (with media queries)

---

## 🔧 Tech Stack

- **React**
- **React Router DOM**
- **Vite**
- **JavaScript (ES6+)**
- **HTML & CSS**

---

## 📁 Project Structure

src/
├── 📁 public/
│ └── 📁 assets/
│ ├── 🖼️ logo.png
│ ├── 🔍 search.png
│ ├️── 👤 user.png
│ └── 🌐 favicon.png
├── 📁 src/
├── 📁 components/
│ ├── 🎩 Header.jsx
│ ├── 🥅 Filters.jsx
│ ├── 🎧 PodcastCard.jsx
│ ├── 🕸️ PodcastGrid.jsx
│ ├── 📄 Pagination.jsx
│ └── 🔍Search.jsx
├── 📁 data/
│ └── 🎵 genres.js
├── 📁 pages/
│ ├── 🏠 Home.jsx
│ └── 📺 ShowDetail.jsx
├── 📁 styles/
│ ├── 🎨 App.css
│ └── 📲 Mediaqueries.css
├── 📁 utils/
│ ├── 📊 api.js
│ ├── 🎶 genreUtils.js
│ └── ⏱️ time.js
├── 📚 App.jsx
└── 📜 main.jsx

---

## 🚀 Getting Started

## 🛠️ Installation

> 📦 Requirements:
>
> - Node.js
> - npm

1. **Clone the repository**

```
git clone https://github.com/P-ule-P/PUGPUL25129_fto2502_Group-B2_Pugisho-Pule_DJS05.git
cd PUGPUL25129_fto2502_Group-B2_Pugisho-Pule_DJS05
```

2.  **Install dependencies**

```
npm install
```

3. **Run the development server**

```
npm run dev
The app should now be running at http://localhost:5173.
```

---

## 📋 How to Use

### 🚀 Launch the App

- Run the development server using `npm run dev`
- Open your browser at `http://localhost:5173`

### 🗂️ Browse Podcasts

- The homepage displays a clean grid of podcast cards
- Each card includes an image, title, genres, season count, and update date

### 🔍 Search

- Use the search input in the header to find podcasts by title
- The results update in real-time as you type

### 🎯 Filter by Genre

- Use the **Genre** dropdown to show only podcasts in a specific category (e.g., Technology, Comedy)

### ↕️ Sort the Results

- Use the **Sort** dropdown to:
  - Sort alphabetically (A–Z or Z–A)
  - Sort by most recent or oldest update

### 📄 Navigate with Pagination

- Use the numbered buttons at the bottom of the grid to switch between pages
- 12 podcasts per page for optimal readability

### 📘 View Show Details

- Click any podcast card to open a full **Show Detail Page**
- Includes podcast description, genre tags, update info, and all seasons/episodes

### 🔁 Switch Between Seasons

- Use the **season dropdown** on the show page to view episodes from a different season
- Season image, title, and description update accordingly

### 🎧 Browse Episodes

- Each episode displays:
  - Episode number
  - Title
  - Short description
  - Associated season image

### 🡐 Return to Browse

- Click the arrow back icon (←) at the top left to return to the homepage
- Your search, filter, and sort settings will still be applied
