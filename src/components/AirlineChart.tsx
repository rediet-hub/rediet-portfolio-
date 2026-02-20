import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { airline: 'Ethiopian',  share: 58 },
  { airline: 'Kenya Awys', share: 14 },
  { airline: 'RwandaAir',  share: 9  },
  { airline: 'SAA',        share: 7  },
  { airline: 'Others',     share: 12 },
];

const GOLD      = '#C8941A';
const GOLD_DIM  = '#6B4E0F';

export default function AirlineChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} layout="vertical" margin={{ left: 10, right: 20, top: 0, bottom: 0 }}>
        <XAxis
          type="number" domain={[0, 70]}
          tick={{ fill: 'rgba(245,239,230,0.3)', fontSize: 10, fontFamily: 'DM Mono' }}
          tickFormatter={(v) => `${v}%`}
          axisLine={false} tickLine={false}
        />
        <YAxis
          type="category" dataKey="airline" width={85}
          tick={{ fill: 'rgba(245,239,230,0.5)', fontSize: 11, fontFamily: 'DM Sans' }}
          axisLine={false} tickLine={false}
        />
        <Tooltip
          cursor={{ fill: 'rgba(255,255,255,0.03)' }}
          contentStyle={{
            background: '#1a1410', border: '1px solid rgba(200,148,26,0.3)',
            borderRadius: 0, fontFamily: 'DM Mono', fontSize: 11,
            color: '#E8B84B',
          }}
          formatter={(v: number) => [`${v}%`, 'Market Share']}
        />
        <Bar dataKey="share" radius={0} maxBarSize={20}>
          {data.map((entry, i) => (
            <Cell key={i} fill={i === 0 ? GOLD : GOLD_DIM} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
