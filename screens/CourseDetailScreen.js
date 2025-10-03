import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const CourseDetailScreen = ({ route, navigation }) => {
  const { course } = route.params; // Get course data passed from CourseListScreen

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: course.image }} style={styles.courseBanner} />
      <View style={styles.content}>
        <Text style={styles.courseDetailTitle}>{course.title}</Text>
        <Text style={styles.instructor}>مامۆستا: {course.instructor}</Text>
        <Text style={styles.descriptionHeader}>دەربارەی کۆرس:</Text>
        <Text style={styles.description}>{course.description}</Text>

        <TouchableOpacity 
          style={styles.viewLessonsButton} 
          onPress={() => navigation.navigate('LessonList', { courseId: course.id, courseTitle: course.title })}
        >
          <Text style={styles.viewLessonsButtonText}>بینینی وانەکان</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  courseBanner: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  content: {
    padding: 20,
  },
  courseDetailTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  instructor: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },
  descriptionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8,
    color: '#333',
  },
  description: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
    marginBottom: 20,
  },
  viewLessonsButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  viewLessonsButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CourseDetailScreen;