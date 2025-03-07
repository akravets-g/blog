import unittest
from src.lib.popularity import getPopularity, addPopularity
import json
class TestPopularity(unittest.TestCase):
    def test_get_popularity(self):
        popularity = getPopularity()
        self.assertIsInstance(popularity, dict)

    def test_add_popularity(self):
        # clean the popularity file
        with open("src/data/popularity.json", "w") as f:
            json.dump({"popularity": []}, f)
        initial_popularity = getPopularity()
        addPopularity("test")
        final_popularity = getPopularity()
        
        self.assertEqual(len(initial_popularity["popularity"]) + 1 if not any([p for p in initial_popularity["popularity"] if p["post"] == "test"]) else len(initial_popularity["popularity"]), len(final_popularity["popularity"]))
        # clean the popularity file
        with open("src/data/popularity.json", "w") as f:
            json.dump(initial_popularity, f)
