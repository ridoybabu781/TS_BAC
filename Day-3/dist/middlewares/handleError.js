export const HandleError = (err, req, res, next) => {
    if (err) {
        res
            .status(err.status || 500)
            .json({ message: err.data || "An error occurred" });
    }
};
//# sourceMappingURL=handleError.js.map