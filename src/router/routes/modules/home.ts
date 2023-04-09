const home = [{
  path: "/home",
  name: "Home",
  // component: () => import("~/views/home/index.vue"),
  component: () => import("~/views/home/components/lowCodeContainer.vue"),
  meta: {
    title: "Home",
  },
},
{
  path: "/hero",
  name: "Hero",
  component: () => import("~/views/home/components/Hero.vue"),
},
{
  path: "/StoreTest",
  name: "StoreTest",
  component: () => import("~/views/home/components/StoreTest.vue"),
},

{
  path: "/lowCode",
  name: "lowCode",
  component: () => import("~/views/home/components/lowCodeContainer.vue"),
},
];

export default home;
