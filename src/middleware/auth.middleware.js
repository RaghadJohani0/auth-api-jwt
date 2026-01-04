router.get("/profile", authenticateToken, controller.profile);
