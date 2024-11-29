<template>
  <header
    :class="{ 'bg-lightBlue': isScrolled, 'bg-transparent': !isScrolled }"
    class="fixed top-0 left-0 right-0 z-20 max-w-screen"
  >
    <nav
      class="relative flex items-center py-4 max-w-6xl mx-auto px-6 justify-between font-bold text-white"
    >
      <!-- Logo -->
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="../assets/images/logo4.png"
          alt="logo image"
          class="object-cover h-10"
        />
      </a>

      <!-- Menu for Desktop -->
      <div
        class="hidden font-roboto font-medium md:flex md:space-x-8 text-white"
      >
        <div class="inline-block">
          <a :class="{ active: activeSection === 'hero' }" href="#hero">Home</a>
        </div>
        <div class="inline-block">
          <a :class="{ active: activeSection === 'about' }" href="#about"
            >About</a
          >
        </div>
        <div class="inline-block">
          <a :class="{ active: activeSection === 'category' }" href="#category"
            >Category</a
          >
        </div>
        <div class="inline-block">
          <a
            :class="{ active: activeSection === 'collection' }"
            href="#collection"
            >Collection</a
          >
        </div>
        <div class="inline-block">
          <a :class="{ active: activeSection === 'benefit' }" href="#benefit"
            >Benefit</a
          >
        </div>
        <div class="inline-block">
          <a :class="{ active: activeSection === 'team' }" href="#team">Team</a>
        </div>
      </div>

      <!-- Hamburger Button for Mobile -->
      <div class="md:hidden z-50">
        <button
          @click="toggleMenu"
          :class="{ open: isMenuOpen }"
          type="button"
          class="block hamburger focus:outline-none"
        >
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>

      <!-- Normal Button -->
      <button
        class="hidden md:block py-2 px-4 rounded-md font-semibold uppercase bg-gradientSecondary text-white"
      >
        Join us
      </button>
    </nav>
  </header>

  <!-- Mobile Menu -->
  <transition name="fade">
    <div
      v-if="isMenuOpen"
      @click.self="toggleMenu"
      class="fixed top-0 left-0 w-full min-h-screen z-10"
    >
      <div
        class="bg-lightBlue p-8 text-white font-alata flex flex-col items-center space-y-6 pt-24"
      >
        <div @click="toggleMenu" class="inline-block">
          <a
            :class="{ active: activeSection === 'home' }"
            href="#home"
            >Home</a
          >
        </div>

        <div class="inline-block">
          <a
            @click="toggleMenu"
            :class="{ active: activeSection === 'about' }"
            href="#about"
            >About</a
          >
        </div>
        <div class="inline-block">
          <a
            @click="toggleMenu"
            :class="{ active: activeSection === 'category' }"
            href="#category"
            >Category</a
          >
        </div>
        <div class="inline-block">
          <a
            @click="toggleMenu"
            :class="{ active: activeSection === 'collection' }"
            href="#collection"
            >Collection</a
          >
        </div>
        <div class="inline-block">
          <a
            @click="toggleMenu"
            :class="{ active: activeSection === 'benefit' }"
            href="#benefit"
            >Benefit</a
          >
        </div>
        <div class="inline-block">
          <a
            @click="toggleMenu"
            :class="{ active: activeSection === 'team' }"
            href="#team"
            >Team</a
          >
        </div>
        <a href="#" class="w-full">
          <button
            class="block md:hidden py-3 px-6 w-full rounded-md font-semibold uppercase bg-gradientSecondary text-white"
          >
            Join us
          </button></a
        >
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false,
      activeSection: "",
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 30;
    },
    handleSectionIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(`Section in view: ${entry.target.id}`); // Debugging
          this.activeSection = entry.target.id;
        }
      });
    },

    setUpObserver() {
      const isSmallDevice = window.innerWidth < 768; // Check if device is small
      const thresholdValue = isSmallDevice ? 0.3 : 0.5;

      // Set up the observer with dynamic threshold
      this.observer = new IntersectionObserver(this.handleSectionIntersection, {
        threshold: thresholdValue, // Adjust threshold based on device size
      });

      // Observe sections
      ["hero", "about", "category", "collection", "benefit", "team"].forEach(
        (section) => {
          const sectionElement = document.getElementById(section);
          if (sectionElement) {
            this.observer.observe(sectionElement);
          }
        }
      );
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);

    this.setUpObserver();
    // IntersectionObserver to track which section is in view
    // this.observer = new IntersectionObserver(this.handleSectionIntersection, {
    //   // threshold: 0.5, // Trigger when 50% of the section is visible
    //    threshold: [0.3, 0.5],
    // });

    // // Start observing each section
    // ["hero", "about", "category", "collection", "benefit", "team"].forEach(
    //   (section) => {
    //     this.observer.observe(document.getElementById(section));
    //   }
    // );
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    // if (this.observer) {
    //   this.observer.disconnect();
    // }
    window.removeEventListener("resize", this.setUpObserver);
    if (this.observer) {
      this.observer.disconnect();
    }
  },
};
</script>
<style>
/* Add active class styles */
.active {
  color: #3c21b5;
}

.hamburger {
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: all 0.25s;
  position: relative;
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
  position: absolute;
  width: 24px;
  height: 2px;
  top: 0;
  left: 0;
  background: #fff;
  transition: all 0.5s;
}

.hamburger-middle {
  transform: translateY(7px);
}

.hamburger-bottom {
  transform: translateY(14px);
}

.open {
  transform: rotate(90deg);
}

.open .hamburger-top {
  transform: rotate(45deg) translateY(6px) translateX(6px);
}

.open .hamburger-middle {
  display: none;
}

.open .hamburger-bottom {
  transform: rotate(-45deg) translateY(6px) translateX(-6px);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
