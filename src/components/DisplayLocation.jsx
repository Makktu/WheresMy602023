import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function DisplayLocation({ busLocation }) {
  return (
    <>
      {busLocation ? (
        <Text style={styles.displayStyle}>{busLocation}</Text>
      ) : (
        <Text style={styles.displayStyle}>PICK ONE</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  displayStyle: {
    fontSize: 28,
    color: 'orangered',
  },
});
