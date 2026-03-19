import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock Data
const stats = {
  totalUsers: 1284,
  pendingIssues: 24,
  systemStatus: 'Optimal',
  monthlyRevenue: 15420.50
};

const tickets = [
  { id: 'T-1001', user: 'Somchai K.', subject: 'Login problem', status: 'Pending', priority: 'High', date: '2026-03-19' },
  { id: 'T-1002', user: 'Wichai S.', subject: 'Payment failed', status: 'Resolved', priority: 'Critical', date: '2026-03-18' },
  { id: 'T-1003', user: 'Ananya P.', subject: 'Update profile', status: 'Resolved', priority: 'Low', date: '2026-03-18' },
  { id: 'T-1004', user: 'Kittisak T.', subject: 'Feature request', status: 'Pending', priority: 'Medium', date: '2026-03-17' },
  { id: 'T-1005', user: 'Nattaya J.', subject: 'Bug report: UI', status: 'Pending', priority: 'High', date: '2026-03-17' },
];

// Routes
app.get('/api/stats', (req, res) => {
  res.json(stats);
});

app.get('/api/tickets', (req, res) => {
  res.json(tickets);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
