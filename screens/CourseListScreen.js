import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { courses } from '../data/courses'; // Import your course data

const CourseListScreen = ({ navigation }) => {
  const renderCourseItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.courseCard} 
      onPress={() => navigation.navigate('CourseDetail', { course: item })}
    >
      <Image source={{ uri: item.image }} style={styles.courseImage} />
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <Text style={styles.courseInstructor}>{item.instructor}</Text>
        <Text style={styles.courseDescription}>{item.description.substring(0, 70)}...</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={renderCourseItem}
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
  listContent: {
    paddingHorizontal: 10,
  },
  courseCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  courseImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  courseInfo: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  courseInstructor: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  courseDescription: {
    fontSize: 13,
    color: '#888',
  },
});

export default CourseListScreen;