import unittest
from src.lib.comment import getComments, addComment
import json
class TestComment(unittest.TestCase):
    def test_get_comments(self):
        comments = getComments()
        self.assertIsInstance(comments, list)

    def test_add_comment(self):
        # clean the comments file
        with open("src/data/comments.json", "w") as f:
            json.dump({"comments": []}, f)

        initial_comments = getComments()
        addComment({"text": "test"})
        final_comments = getComments()
        
        self.assertEqual(len(initial_comments["comments"]) + 1, len(final_comments["comments"]))
        # clean the comments file
        with open("src/data/comments.json", "w") as f:
            json.dump(initial_comments, f)
