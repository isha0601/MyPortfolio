import React from 'react';
import { Trophy, Award, Star, Medal, Code, Terminal, TrendingUp } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Star,
      title: 'LeetCode 700+ Problems',
      description: 'Solved over 700 data structures & algorithms problems on LeetCode.',
      year: '2025-Present',
      category: 'DSA',
      link: 'https://leetcode.com/u/isha06_/', // Replace with your actual link
    },
    {
      icon: Code,
      title: 'CodeChef 1000+ Problems',
      description: 'Cracked more than 1000 coding problems on CodeChef, sharpening competitive programming skills.',
      year: '2025-Present',
      category: 'Competitive',
      link: 'https://www.codechef.com/users/isha_87', // Replace with your actual link
    },
    {
      icon: Terminal,
      title: '5⭐ in C++ & Problem Solving on HackerRank',
      description: 'Achieved 5 stars in C++ and Problem Solving domains on HackerRank.',
      year: '2025-Present',
      category: 'HackerRank',
      link: 'https://www.hackerrank.com/profile/isha0601', // Replace with your actual link
    },
    {
      icon: Trophy,
      title: '2nd Runner Up at AptiTech',
      description: 'Secured 2nd runner up position in AptiTech by Enroll Engineer.',
      year: '2024',
      category: 'Competition',
    },
    {
      icon: TrendingUp,
      title: 'GFG Institute Rank 240',
      description: 'Ranked 240 in GeeksforGeeks Institute Coding Leaderboard.',
      year: '2025',
      category: 'Ranking',
      link: 'https://www.geeksforgeeks.org/user/isha_2905/?_gl=1*1rlz03a*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwyb3DBhBlEiwAqZLe5LqcKmpqCcto4eCE9uB7VWrNAuUeIpM0revO5GzuVt6b7hZbO0k6BhoCklYQAvD_BwE&gbraid=0AAAAAC9yBkBYvoog7bf0jhSBUzHFJ1FSx', 
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Awards, milestones, and stats that showcase my coding journey and passion for problem solving.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4 flex-shrink-0">
                  <achievement.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-card-foreground">
                      {achievement.title}
                    </h3>
                    <span className="text-sm text-muted-foreground bg-secondary/20 px-3 py-1 rounded-full">
                      {achievement.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-primary font-semibold">
                      {achievement.year}
                    </div>
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500 underline ml-4"
                      >
                        View
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
