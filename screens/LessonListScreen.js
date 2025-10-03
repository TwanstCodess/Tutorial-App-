import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { courses } from '../data/courses'; // Import your course data

const LessonListScreen = ({ route }) => {
  const { courseId, courseTitle } = route.params;
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>کۆرسەکە نەدۆزرایەوە.</Text>
      </View>
    );
  }

  const renderLessonItem = ({ item }) => (
    <TouchableOpacity style={styles.lessonCard}>
      <Text style={styles.lessonTitle}>{item.title}</Text>
      <Text style={styles.lessonDuration}>{item.duration}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.courseHeaderTitle}>{course.title} - وانەکان</Text>
      <FlatList
        data={course.lessons}
        keyExtractor={(item) => item.id}
        renderItem={renderLessonItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    paddingTop: 10,
  },
  courseHeaderTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#333',
  },
  listContent: {
    paddingHorizontal: 10,
  },
  lessonCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    flex: 1, // Allow title to take up space
    marginRight: 10,
  },
  lessonDuration: {
    fontSize: 14,
    color: '#777',
  },
  errorText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: 'red',
  },
});

export default LessonListScreen;