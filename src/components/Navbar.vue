<template>
  <header
    :class="{ 'bg-lightBlue': isScrolled, 'bg-transparent': !isScrolled }"
    class="fixed top-0 left-0 right-0 z-20 max-w-screen"
  >
    <nav
      class="relative flex items-center py-3 max-w-6xl mx-auto px-6 justify-between font-bold text-white"
    >
      <!-- Logo -->
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <h1 class="font-lato text-2xl font-bold">Logo</h1>
      </a>

      <!-- Menu for Desktop -->
      <div
        class="hidden font-roboto font-medium md:flex md:space-x-8 text-white"
      >
        <div class="inline-block">
          <a href="#hero">Home</a>
        </div>
        <div class="inline-block">
          <a href="#about">About</a>
        </div>
        <div class="inline-block">
          <a href="#category">Category</a>
        </div>
        <div class="inline-block">
          <a href="#collection">Collection</a>
        </div>
        <div class="inline-block">
          <a href="#benefit">Benefit</a>
        </div>
        <div class="inline-block">
          <a href="#team">Team</a>
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
      class="fixed top-14 left-0 w-full min-h-screen z-10"
    >
      <div
        class="bg-lightBlue p-8 text-white font-alata flex flex-col items-center space-y-6"
      >
        <div class="inline-block">
          <a href="#hero">Home</a>
        </div>
        <div class="inline-block">
          <a href="#about">About</a>
        </div>
        <div class="inline-block">
          <a href="#category">Category</a>
        </div>
        <div class="inline-block">
          <a href="#collection">Collection</a>
        </div>
        <div class="inline-block">
          <a href="#benefit">Benefit</a>
        </div>
        <div class="inline-block">
          <a href="#team">Team</a>
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
      isScrolled: false, // Flag to toggle navbar background
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggle the mobile menu visibility
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 30; // Use window.scrollY to check scroll position
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); // Attach the scroll listener
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll); // Clean up event listener on unmount
  },
};
</script>

<style scoped>
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
