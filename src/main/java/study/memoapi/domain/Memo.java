package study.memoapi.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Memo {

    @Id @GeneratedValue
    private long id;
    private String title;
    private String content;

    public Memo(MemoDto memoDto) {
        this.title = memoDto.getTitle();
        this.content = memoDto.getContent();
    }

    public void update(MemoDto memoDto) {
        this.title = memoDto.getTitle();
        this.content = memoDto.getContent();
    }
}
