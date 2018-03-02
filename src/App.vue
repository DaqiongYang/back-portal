<template>
  <div id="app">
    <transition mode="out-in" name="fade">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>
