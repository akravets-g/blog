import unittest
from src.lib.popularity import getPopularity, addPopularity
import json
class TestPopularity(unittest.TestCase):
    def test_get_popularity(self):
        popularity = getPopularity()
        self.assertIsInstance(popularity, dict)

    def test_add_popularity(self):
        initial_popularity = getPopularity()
        addPopularity("test")
        final_popularity = getPopularity()
        self.assertEqual(len(initial_popularity["popularity"]) + 1, len(final_popularity["popularity"]))
