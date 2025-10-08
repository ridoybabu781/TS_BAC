export const handleError = async (error, req, res, next) => {
    if (error) {
        return res
            .status(error.status || 500)
            .json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
};
//# sourceMappingURL=handleError.js.map