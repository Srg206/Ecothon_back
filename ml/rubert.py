from typing import List
from transformers import AutoTokenizer, AutoModel
import torch
import numpy as np


class TextEmbedder:
    def __init__(self):
        self.tokenizer = AutoTokenizer.from_pretrained('cointegrated/rubert-tiny2')
        self.model = AutoModel.from_pretrained('cointegrated/rubert-tiny2')

    def embed(self, texts: List[str]) -> np.ndarray:
        tokens = self.tokenizer(texts, padding=True, truncation=True, return_tensors='pt')
        with torch.no_grad():
            model_output = self.model(**tokens)
        embeddings = model_output.last_hidden_state[:, 0, :].numpy()
        return embeddings