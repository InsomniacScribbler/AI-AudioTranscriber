package com.InsomniacScribbler.AIAudioTranscriber.Controller;


import org.springframework.ai.openai.OpenAiAudioTranscriptionModel;
import org.springframework.ai.openai.api.OpenAiAudioApi;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/transcribe")
public class TranscriptionController {

//    private final OpenAiAudioTranscriptionModel TranscriptionModel;
//    public TranscriptionController() {
//        OpenAiAudioApi openAiAudioApi = new OpenAiAudioApi(System.getenv(spring.ai.openai.api-key));
//        this.transcriptionModel = new OpenAiAudioTranscriptionModel(openAiAudioApi);
//    }
    //Not done this way cuz
    private final OpenAiAudioTranscriptionModel transcriptionModel;

    public TranscriptionController(OpenAiAudioTranscriptionModel transcriptionModel) {
        this.transcriptionModel = transcriptionModel;
    }



}
