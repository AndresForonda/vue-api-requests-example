import HelloWorld from "../components/HelloWorld.vue";
import BasicRequest from "../components/1BasicRequest.vue";
import RequestWithLoadingAndError from "../components/2RequestWithLoadingAndError.vue";
import RequestWithStatus from "../components/3RequestWithStatus.vue";
import RequestWithStatusAndAPIClient from "../components/4RequestWithStatusAndAPIClient.vue";
import RequestWithAsyncHelper from "../components/5RequestWithAsyncHelper.vue";
import Users from "../components/6Users.vue";
import User from "../components/User.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    path: "/basic-request",
    name: "BasicRequest",
    component: BasicRequest,
  },
  {
    path: "/request-with-loading-and-error",
    name: "RequestWithLoadingAndError",
    component: RequestWithLoadingAndError,
  },
  {
    path: "/request-with-status",
    name: "RequestWithStatus",
    component: RequestWithStatus,
  },
  {
    path: "/request-with-status-and-api-client",
    name: "RequestWithStatusAndAPIClient",
    component: RequestWithStatusAndAPIClient,
  },
  {
    path: "/request-with-async-helper",
    name: "RequestWithAsyncHelper",
    component: RequestWithAsyncHelper,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/users/:id",
    name: "User",
    component: User,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
