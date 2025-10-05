export const handleError = (err, req, res, next) => {
    if (err) {
        res.status(err.status || 500).json({
            message: err.message || "Internal Server Error",
        });
    }
};
//# sourceMappingURL=handleError.js.map