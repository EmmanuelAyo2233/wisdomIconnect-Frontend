const {
    PORT,
    express,
    cors,
    helmet,
    cookieParser,
    API_URL,
} = require("./config/reuseablePackages");
const {
    authRoutes,
    userRoutes,
    appointmentsRoutes,
    menteessRoutes,
} = require("./routes");

// Initialize App
const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
    res.status(200).json({ message: "Backend is working" });
});

app.use(`${API_URL}/auth`, authRoutes);
app.use(`${API_URL}/user`, userRoutes);
app.use(`${API_URL}/mentors`, menteessRoutes);
app.use(`${API_URL}/appointments`, appointmentsRoutes);

// Catch all for undefuned routes
app.use((req, res, next) => {
    // res.status(404).json({ message: "Route Not found" });
    return next(new Error("This is error"));
});

app.use((err, req, res, next) => {
    res.status(404).json({ status: "error", message: err.message });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/docs`);
});
